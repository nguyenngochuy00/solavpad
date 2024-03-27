import { BN } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';
export type NetworkType = { name: string; logo: string };

export interface CommonItem {
	label: string;
	value: string | number;
}

export interface TabType {
	key: string;
	text: string;
	disabled?: boolean
}



export interface ScheduleType {
	round: string;
	opens: string;
	closes: string;
}

export interface PoolInfoType {
	name?: string;
	symbol?: string;
	opens?: string;
	fcfsOpens?: string;
	closes?: string;
	swapRate?: string;
	cap?: string | number;
	totalUsersParticipated?: number;
	totalFundsSwapped?: string;
	accessType?: string;
	schedule?: ScheduleType[];
}

export interface DataSetType {
	label: string;
	data: number[];
	backgroundColor: string[];
	borderColor: string[];
	borderWidth: number;
}

export interface TokenMetricsType {
	labels: string[];
	datasets: DataSetType[];
}

export interface AllocationType {
	value: string;
	percent: string | number;
	claimed: string | number;
	time: string;
}

export interface SolLaunchpadDetailTekenMetricsType {
	poolInfo: PoolInfoType;
	tokenMetrics: TokenMetricsType;
	allocations: AllocationType;
}

export interface IdoInfoType {
	idoId: number,
    openTimestamp: number ,
	closeTimestamp: number ,
    cap: BN,
    participated: BN,
    participatedCount: number,
    closed: boolean,
    releaseToken: PublicKey,
    releaseTokenPair?: PublicKey,
    raiseToken: PublicKey,
    releaseTokenDecimals: number,
    raiseTokenDecimals: number,
    authority: PublicKey,
    tiers: Array<TierItem>,
    rounds: Array<RoundItem>,
    releases: Array<ReleaseItem>,
}

export interface TierItem {
    name: String,
    allocatedCount: number
}
export interface ReleaseItem {
    fromTimestamp: number,
    toTimestamp: number,
    percent: number,
} 
export interface RoundItem{
     name: String,
     durationSeconds: number,
     class: RoundClass,
     tierAllocations: Array<BN>,
}


export enum RoundClass {
    Allocation ,
    FcfsPrepare ,
    Fcfs,
}

export interface UserStraitPda {
     address: PublicKey, //16
     tierIndex: number, //1
     allocated: boolean, //1
     participateAmount: BN, //16
     claimAmount: BN, //16
     owner: PublicKey,//32
}


export interface ProjectDetail extends IdoInfoType {
	id: number | string;
	contract: string | null;
	contractVersion?: number;
	decimals?: number;
	isPrivate?: boolean;
	rate?: string | number;
	totalCountWallet?: number;
	totalCountUserParticipated?: number;
	totalFundParticipated?: number;
	maxSingleParticipationAllocated?: number;
	maxTotalParticipationAllocated?: string | number;
	description?: string;
	telegram?: string;
	projectTokenAddress?: string;
	logo?: string;
	medium?: string;
	name?: string;
	projectTokenSymbol?: string;
	totalSupply?: string | number;
	twitter?: string;
	website?: string;
	yourAllocationVisible?: boolean;
	projectTokenContract?: string;
	symbol?: string;
	disabled?: boolean;
	openTime?: string|number;
	closeTime?: string|number;
	fcfsOpenTime?: string|number;
	allocation?: string;
	tokenAddress?: string;
	state?: string;
	tags?: string[];
	color?: string;
	youtube_id?: string;
	parallax_image?: string;
	articles?: number[] | string[];
	tokenmetrics?: number[] | string[];
	images?: number[] | string[];
	routeUrl?: string;
	participants?: string | number;
	totalFundsSwapped?: string;
	progressPercent?: number | string;
	progressCurent?: number | string;
	progressValue?: number | string;
}

