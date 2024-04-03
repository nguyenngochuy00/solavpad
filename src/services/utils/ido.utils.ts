
import { BN } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';
import { IdoInfoType, ProjectDetail, RoundInfo } from '../../types';
import { AllocationWallet, GetInfoAllocationParams, RoundClassMap, UserStraitPda, WalletInfo } from '../../types/ido.type';
import moment from 'moment';



export const fcfsTimestamp = (idoAccount: IdoInfoType): number => {
	if (!idoAccount.openTimestamp.toString()) return 0
	let ts = Number(idoAccount.openTimestamp.toString());

	const rounds = idoAccount.rounds;
	for (let i = 0; i < rounds.length; i++) {

		if (Object.keys(rounds[i].class).find(e => e === RoundClassMap.fcfsPrepare)) return ts;

		if (Object.keys(rounds[i].class).find(e => e === RoundClassMap.fcfs)) return ts;

		ts += rounds[i].durationSeconds;
	}
	return ts | 0;
};

export const closeTimestamp = (idoAccount: IdoInfoType): number => {
	let ts = Number(idoAccount.openTimestamp.toString());
	const rounds = idoAccount.rounds;
	for (let i = 0; i < rounds.length; i++) {
		ts += rounds[i].durationSeconds;
	}
	return ts;
};

export const isClosed = (currentTimestamp: number, idoAccount: IdoInfoType): boolean => {
	const { participated, cap, closed } = idoAccount;
	const closeTs = closeTimestamp(idoAccount);
	if (closed || currentTimestamp >= closeTs || participated.gte(cap)) return true;

	return false;
};

export const getAllocationRemaining = (round: number, tier: number, idoAccount: IdoInfoType, userPda: UserStraitPda): BN => {

	if (tier == 0 || round == 0) {
		return new BN(0);
	}
	const roundIndex = round - 1;
	const tierIndex = tier;
	if (roundIndex > idoAccount.tiers.length ||
		tierIndex > idoAccount.tiers.length ||
		tierIndex != userPda.tierIndex) return new BN(0);

	if (userPda.allocated) {
		const participated = userPda.participateAmount;
		const allocated = idoAccount.rounds[roundIndex].tierAllocations[tierIndex];
		if (participated < allocated) return allocated.sub(participated);
	}

	return new BN(0);
};

export const getIdoInfo = (idoAccount: ProjectDetail, currentTimestamp: number) => {
	let totalAllocationsCount = 0;
	let fcfsTS = fcfsTimestamp(idoAccount);
	let closeTS = closeTimestamp(idoAccount);
	const openTS = Number(idoAccount.openTimestamp.toString());
	let state = 'C';
	if (!isClosed(currentTimestamp, idoAccount)) {
		if (currentTimestamp < openTS) state = 'P';
		else {
			if (
				(fcfsTS == closeTS && currentTimestamp < closeTS) ||
				(fcfsTS < closeTS && currentTimestamp < fcfsTS)
			)
				state = 'O';

			if (
				fcfsTS < closeTS &&
				currentTimestamp >= fcfsTS &&
				currentTimestamp < closeTS
			)
				state = 'F';
		}

		let tiers = idoAccount.tiers;

		for (let i = 0; i < tiers.length; i++) {
			let tierAllocatedCount = tiers[i].allocatedCount;

			totalAllocationsCount += tierAllocatedCount;
		}
	}
	// console.log("state=>", state);

	return {
		raiseToken: idoAccount.raiseToken.toString(),
		raiseTokenDecimals: idoAccount.raiseTokenDecimals,
		rate: idoAccount.rate,
		openTimestamp: Number(idoAccount.openTimestamp.toString()),
		fcfsTimestamp: fcfsTS,
		closeTimestamp: closeTS,
		allocationsCount: totalAllocationsCount,
		state: state,
		participatedCount: idoAccount.participatedCount,
		participated: idoAccount.participated.toString(),
		cap: idoAccount.cap.toString(),
		infoRounds: infoRounds(idoAccount, currentTimestamp),
	};
};

export const infoRounds = (idoAccount: IdoInfoType, currentTimestamp: number): Array<RoundInfo> => {
	const rounds = idoAccount.rounds;
	const nameList = [];
	const openTimestampList = [];
	const closeTimestampList = [];
	let ts = Number(idoAccount.openTimestamp.toString());

	let roundInfo: RoundInfo[] = [];
	for (let i = 0; i < rounds.length; i++) {
		nameList.push(rounds[i].name);
		openTimestampList.push(ts);
		ts = ts + Number(rounds[i].durationSeconds);
		closeTimestampList.push(ts);
		roundInfo.push({
			round: rounds[i].name,
			opens: moment.unix(openTimestampList[i]).utc().format('YYYY-MM-DD HH:mm:ss [UTC]'),
			closes: moment.unix(closeTimestampList[i]).utc().format('YYYY-MM-DD HH:mm:ss [UTC]'),
		})
	}
	return roundInfo;

}


export const infoWallet = (idoAccount: IdoInfoType, userPda: UserStraitPda, currentTimestamp: number): WalletInfo => {
	let round = 0;
	let roundState = 4;
	let roundStateText = '';
	let roundTimestamp = 0;
	let tier = userPda.tierIndex;
	let tierName = tier == 0 ? '-' : idoAccount.tiers[tier - 1].name;
	if (!isClosed(currentTimestamp, idoAccount)) {
		let ts = Number(idoAccount.openTimestamp.toString());
		if (currentTimestamp < ts) {
			roundState = 0;
			roundStateText = 'Allocation Round <u>opens</u> in:';
			roundTimestamp = ts;
		} else {
		
			for (let i = 0; i < idoAccount.rounds.length; i++) {
				round = i + 1;
				const r = idoAccount.rounds[i];
				ts += r.durationSeconds;
				console.log("ts",ts);
				
				
				if (currentTimestamp < ts) {
					console.log("round",r);
					if (Object.keys(r.class).find(e => e === RoundClassMap.allocation)) {
						roundState = 1;
						roundStateText = 'Allocation Round <u>closes</u> in:';
						roundTimestamp = ts;
					}


					if (Object.keys(r.class).find(e => e === RoundClassMap.fcfsPrepare)) {
						roundState = 2;
						roundStateText = 'FCFS Round <u>opens</u> in:';
						roundTimestamp = ts;
					}

					if (Object.keys(r.class).find(e => e === RoundClassMap.fcfs)) {
						roundState = 3;
						roundStateText = 'FCFS Round <u>closes</u> in:';
						roundTimestamp = ts;
					}
					break;
				}
				
			}
		}
	}
	const remainingAllocation = getAllocationRemaining(round, tier, idoAccount, userPda).toString();

	return { tier, tierName, round, roundState, roundStateText, roundTimestamp, userParticipation: userPda.participateAmount.toString(), remainingAllocation };
};



export const _getAllocation = (params: GetInfoAllocationParams): AllocationWallet | undefined => {
	const { idoAccount, userPda, index, now_ts, releaseTokenAccount } = params;

	const { releases, raiseTokenDecimals, releaseTokenDecimals, rate, releaseToken } = idoAccount;
	const participated = userPda.participateAmount

	if (index > releases.length) return undefined

	let status = 0;
	let remaining = new BN(0);

	const release = releases[index];
	const fromTimestamp = release.fromTimestamp;
	const toTimestamp = release.toTimestamp;
	const percent = release.percent;


	if(!releaseTokenDecimals || !raiseTokenDecimals || !rate){
		return undefined;
	}

	let total = participated.mul(new BN(rate)).div(new BN(1000000)).mul(new BN(percent)).div(new BN(10000));

	let claimable = total;
	if (raiseTokenDecimals > releaseTokenDecimals) {
		total = total.div(new BN(10).pow(new BN(raiseTokenDecimals - releaseTokenDecimals)));
	}
	if (raiseTokenDecimals < releaseTokenDecimals) {
		total = total.mul(new BN(10).pow(new BN(releaseTokenDecimals - raiseTokenDecimals)));
	}
	if (toTimestamp > fromTimestamp && now_ts < toTimestamp) {
	
		let elapsed = 0;
		if (now_ts > fromTimestamp) {
			elapsed = now_ts - fromTimestamp;
		}
		let duration = toTimestamp - fromTimestamp;
		claimable = total.mul(new BN(elapsed)).div(new BN(duration));
	}

	//get claimed of user
	let claimed = userPda.claims[index]?.amount || new BN(0);

	if (claimed.lt(claimable)) 
		remaining = claimable.sub(claimed);
	
	if (releaseToken.toString() != PublicKey.default.toString()) {
		if (fromTimestamp === 0 || now_ts > fromTimestamp) {
			status = 1;
		}
		if (Number(releaseTokenAccount.amount) === 0) {
			status = 2;
		}
		if (remaining.toNumber() === 0) {
			status = 2;
		}
	}

	return {
		fromTimestamp,
		toTimestamp,
		percent,
		claimable: claimable.toNumber(),
		total: total.toNumber(),
		claimed: claimed.toNumber(),
		remaining: remaining.toNumber(),
		status,
	};
};


