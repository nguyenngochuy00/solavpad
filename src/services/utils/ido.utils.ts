import { utils } from '@coral-xyz/anchor';
import { BN } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';
import { IdoInfoType, ProjectDetail, RoundClass, RoundItem } from '../../types';
import { RoundClassMap, UserStraitPda, WalletInfo } from '../../types/ido.type';
import moment from 'moment';



export const fcfsTimestamp = (idoAccount: IdoInfoType): number => {
	if(!idoAccount.openTimestamp.toString()) return 0
	let ts = Number(idoAccount.openTimestamp.toString());
	
	const rounds = idoAccount.rounds;
	for (let i = 0; i < rounds.length; i++) {
	
		if (Object.keys(rounds[i].class).find(e=>e == RoundClassMap.allocation)) return ts;
		
		if (Object.keys(rounds[i].class).find(e=>e == RoundClassMap.fcfs)) return ts;
		
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

export const isClosed = (currentTimestamp: number,idoAccount: IdoInfoType): boolean => {
	const { participated, cap, closed } = idoAccount;
	const closeTs = closeTimestamp(idoAccount);
	if (closed || currentTimestamp >= closeTs || participated.gte(cap))return true;

	return false;
};

export const getAllocationRemaining = (round: number,tier: number, idoAccount: IdoInfoType, userPda: UserStraitPda): BN => {

	if (tier == 0 || round == 0) {
		return new BN(0);
	}
	const roundIndex = round - 1;
	const tierIndex = tier ;	
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
	console.log("state", state);
	
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
		cap: idoAccount.cap.toString()
	};
};


export const infoWallet = (idoAccount: IdoInfoType,userPda: UserStraitPda,currentTimestamp: number): WalletInfo => {
	let round = 0;
	let roundState = 4;
	let roundStateText = '';
	let roundTimestamp = 0;
	let tier = userPda.tierIndex;
	let tierName = tier == 0 ? '-' : idoAccount.tiers[tier - 1].name;
	debugger
	if (!isClosed(currentTimestamp, idoAccount)) {
		let ts = Number(idoAccount.openTimestamp.toString());
		debugger
		if (currentTimestamp < ts) {
			roundState = 0;
			roundStateText = 'Allocation Round <u>opens</u> in:';
			roundTimestamp = ts;
		} else {
			let r: RoundItem;
			for (let i = 0; i < idoAccount.rounds.length; i++) {
				debugger;
				round += 1;
				r = idoAccount.rounds[i];
				ts += r.durationSeconds;
				if (currentTimestamp < ts) {
					if (Object.keys(r.class).find(e=> e === RoundClassMap.allocation )) {
						roundState = 1;
						roundStateText = 'Allocation Round <u>closes</u> in:';
						roundTimestamp = ts;
					}
				}
			
				if (Object.keys(r.class).find(e=> e === RoundClassMap.fcfsPrepare )) {
					roundState = 2;
					roundStateText = 'FCFS Round <u>opens</u> in:';
					roundTimestamp = ts;
				}

				if (Object.keys(r.class).find(e=> e === RoundClassMap.fcfs )) {
					roundState = 3;
					roundStateText = 'FCFS Round <u>closes</u> in:';
					roundTimestamp = ts;
				}
				break;
			}
		}
	}
	const remainingAllocation = getAllocationRemaining(round, tier, idoAccount, userPda).toString();

	return { tier, tierName, round, roundState, roundStateText, roundTimestamp, userParticipation: userPda.participateAmount.toString(), remainingAllocation };
};

export const infoAllocations = (idoAccount: IdoInfoType) => {
	let allocNumberList: Array<number>[];
	let allocAmountList: Array<number>[];
	let allocClaimedList: Array<number>[];
	let allocReleasedList: Array<BN>[];
	let allocStatusList: Array<BN>[];

	const { releases, releaseToken } = idoAccount;
	if (releaseToken != '11111111111111111111111111111111' &&releases.length > 0) {
		let rows = releases.length * 2;
		for (let i = 0; i < releases.length; i++) {}
	}
};

export const _getRemaining = () => {};


