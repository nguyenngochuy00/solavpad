export interface WalletInfo {
    tier: number, tierName: String, round :number, roundState :number, roundStateText: string, roundTimestamp: number
}

const allocation = {allocation:{}}
const fcfsPrepare = {fcfsPrepare:{}}
const fcfs = {fcfs:{}}

export const RoundClassMap = {
	allocation :"allocation",
	fcfsPrepare : "fcfsPrepare",
	fcfs: "fcfs",
}