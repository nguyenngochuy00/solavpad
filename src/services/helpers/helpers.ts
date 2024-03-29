import { BigNumber } from 'bignumber.js';
import { LAUNCHPAD_STATUS } from '../../constants';
// import { LAUNCHPAD_STATUS } from 'src/constants';

export const minimizeAddress = (address: string, start: number = 8, end: number = 8) => {
	if (!address) return 'N/A';
	if (address && address.length <= 16) return address;
	return `${address.slice(0, start)}...${address.slice(-end)}`;
};

export const formatNumberDownRound = (numberParam: number | string | undefined, decimal: number = 9) => {
	
	if (!numberParam) {
		return 0;
	}
	if (numberParam === null || numberParam === undefined) return 0;

	// const decimalFormat = `0,0.${'0'.repeat(decimal)}`;
	const bigValue = new BigNumber(numberParam).dividedBy(10 ** decimal);
	// format number (ex: 1111.0001 => 1,111.00);
	const bigValueFormatted = bigValue.toFormat(2, BigNumber.ROUND_DOWN, {
		decimalSeparator: '.',
		groupSeparator: ',',
		groupSize: 3
	});
	// remove zero and dot in decimal part (ex: 1,111.00 => 1,111)
	const valueConcated = bigValueFormatted.replace(/\.?0+$/, '');

	return valueConcated;
};

export const getProjectStatusTag = (status : string) => {
	switch (status) {
		case LAUNCHPAD_STATUS.COMPLETED:
			return 'closed';
		case LAUNCHPAD_STATUS.OPENING:
			return 'opening';
		case LAUNCHPAD_STATUS.UPCOMING:
			return 'upcoming';

		default:
			return 'opening';
	}
};
