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



 interface ScheduleType {
	round: string;
	opens: string;
	closes: string;
}

 interface PoolInfoType {
	name?: string;
	symbol?: string;
	fcfsOpens?: string;
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

export type LaunchpadStatus = 'O' | 'P' |'C' | 'F';

export interface IdoInfoType {
	idoId: number,
    openTimestamp: number ,
	closeTimestamp: number ,
    cap:  BN,
    participated: BN,
    participatedCount: number,
    closed: boolean,
    releaseToken: string,
    releaseTokenPair?: string,
    raiseToken: string,
    releaseTokenDecimals: number,
    raiseTokenDecimals: number,
    authority: string,
    tiers: Array<TierItem>,
    rounds: Array<RoundItem>,
    releases: Array<ReleaseItem>,
	state: LaunchpadStatus,
	rate: string | number;
}

export interface TierItem {
    name: string,
    allocatedCount: number
}
export interface ReleaseItem {
    fromTimestamp: number,
    toTimestamp: number,
    percent: number,
} 
export interface RoundItem{
     name: string,
     durationSeconds: number,
     class: RoundClass,
     tierAllocations: Array<BN>,
}


export enum RoundClass {
    Allocation ,
    FcfsPrepare ,
    Fcfs,
}

export interface RoundInfo {
	round: string;
	opens: string;
	closes: string;
}



export interface ProjectDetail extends IdoInfoType {
	id: number | string;
	contract: string | null;
	contractVersion?: number;
	decimals: number;
	isPrivate: boolean;

	description?: string;
	telegram?: string;
	projectTokenAddress?: string;
	logo: string;
	medium?: string;
	name: string;
	projectTokenSymbol?: string;
	totalSupply?: string | number;
	twitter?: string;
	website?: string;
	yourAllocationVisible?: boolean;
	projectTokenContract?: string;
	symbol: string;
	disabled?: boolean;
	fcfsTimestamp?: string|number;
	allocation?: string;
	tokenAddress?: string;
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
	infoRounds?: RoundInfo [];
}

