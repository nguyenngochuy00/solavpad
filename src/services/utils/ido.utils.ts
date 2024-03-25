import { utils } from '@coral-xyz/anchor';
import { BN } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';
import { IdoInfoType, RoundClass, RoundItem, UserStraitPda } from '../../types';
import { WalletInfo } from '../../types/ido.type';



export const fcfsTimestamp = (idoAccount: IdoInfoType): number => {
	let ts = idoAccount.openTimestamp;
	const rounds = idoAccount.rounds;
	for (let i = 0; i < rounds.length; i++) {
		if (rounds[i].class == RoundClass.FcfsPrepare) return ts;
		if (rounds[i].class == RoundClass.Fcfs) return ts;
		ts += rounds[i].durationSeconds;
	}
	return ts;
};

export const closeTimestamp = (idoAccount: IdoInfoType): number => {
	let ts = idoAccount.openTimestamp;
	const rounds = idoAccount.rounds;
	for (let i = 0; i < rounds.length; i++) {
		ts += rounds[i].durationSeconds;
	}
	return ts;
};

export const isClosed = (
	currentTimestamp: number,
	idoAccount: IdoInfoType
): boolean => {
	const { participated, cap, closed } = idoAccount;
	if (
		closed ||
		currentTimestamp >= closeTimestamp(idoAccount) ||
		participated >= cap
	)
		return true;

	return false;
};

export const getAllocationRemaining = (
	round: number,
	tier: number,
	idoAccount: IdoInfoType,
	userPda: UserStraitPda
): BN => {
	if (tier == 0 || round == 0) {
		return new BN(0);
	}
	const roundIndex = round - 1;
	const tierIndex = tier - 1;
	if (
		roundIndex > idoAccount.tiers.length ||
		tierIndex > idoAccount.tiers.length ||
		tierIndex != userPda.tierIndex
	) {
		return new BN(0);
	}
	if (userPda.allocated) {
		const participated = userPda.participateAmount;
		const allocated = idoAccount.rounds[roundIndex].tierAllocations[tierIndex];
		if (participated < allocated) return allocated.sub(participated);
	}

	return new BN(0);
};

export const getIdoInfo = (idoAccount: IdoInfoType, currentTimestamp: number) => {
	let totalAllocationsCount = 0;
	let fcfsTS = fcfsTimestamp(idoAccount);
	let closeTS = closeTimestamp(idoAccount);
	let state = 'C';
	if (!isClosed(currentTimestamp, idoAccount)) {
		if (currentTimestamp < idoAccount.openTimestamp) state = 'P';
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

	return {
		raiseToken: idoAccount.raiseToken,
		raiseTokenDecimals: idoAccount.raiseTokenDecimals,
		rate: idoAccount.rate,
		openTimestamp: idoAccount.openTimestamp,
		fcfsTS: fcfsTS,
		closeTS: closeTS,
		allocationsCount: totalAllocationsCount,
		state: state,
		participatedCount: idoAccount.participatedCount,
		participated: idoAccount.participated,
		cap: idoAccount.cap
	};
};


export const infoWallet = (
	idoAccount: IdoInfoType,
	userPda: UserStraitPda,
	currentTimestamp: number
): WalletInfo => {
	let round = 0;
	let roundState = 4;
	let roundStateText = '';
	let roundTimestamp = 0;
	let tier = userPda.tierIndex;
	let tierName = tier == 0 ? '-' : idoAccount.tiers[tier - 1].name;
	if (!isClosed(currentTimestamp, idoAccount)) {
		let ts = idoAccount.openTimestamp;
		if (currentTimestamp < ts) {
			roundState = 0;
			roundStateText = 'Allocation Round <u>opens</u> in:';
			roundTimestamp = ts;
		} else {
			let r: RoundItem;
			for (let i = 0; i < idoAccount.rounds.length; i++) {
				round += 1;
				r = idoAccount.rounds[i];
				ts += r.durationSeconds;
				if (currentTimestamp < ts) {
					if (r.class == RoundClass.Allocation) {
						roundState = 1;
						roundStateText = 'Allocation Round <u>closes</u> in:';
						roundTimestamp = ts;
					}
				}
				if (r.class == RoundClass.FcfsPrepare) {
					roundState = 2;
					roundStateText = 'FCFS Round <u>opens</u> in:';
					roundTimestamp = ts;
				}

				if (r.class == RoundClass.Fcfs) {
					roundState = 3;
					roundStateText = 'FCFS Round <u>closes</u> in:';
					roundTimestamp = ts;
				}
				break;
			}
		}
	}
	return { tier, tierName, round, roundState, roundStateText, roundTimestamp };
};

export const infoAllocations = (idoAccount: IdoInfoType) => {
	let allocNumberList: Array<number>[];
	let allocAmountList: Array<number>[];
	let allocClaimedList: Array<number>[];
	let allocReleasedList: Array<BN>[];
	let allocStatusList: Array<BN>[];

	const { releases, releaseToken } = idoAccount;
	if (
		releaseToken != new PublicKey('11111111111111111111111111111111') &&
		releases.length > 0
	) {
		let rows = releases.length * 2;

		for (let i = 0; i < releases.length; i++) {}
	}
};

export const _getRemaining = () => {};


