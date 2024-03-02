import { BigNumber } from 'bignumber.js';
import { LAUNCHPAD_STATUS } from 'src/constants';

export const minimizeAddress = (address, start = 8, end = 8) => {
	if (!address) return 'N/A';
	if (address && address.length <= 16) return address;
	return `${address.slice(0, start)}...${address.slice(-end)}`;
};

export const formatNumberDownRound = (number, decimal = 9) => {
	if (!number) {
		return 0;
	}
	if (number === null || number === undefined) return 0;

	// const decimalFormat = `0,0.${'0'.repeat(decimal)}`;
	const bigValue = new BigNumber(number).dividedBy(10 ** decimal);
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

export const getProjectStatusTag = status => {
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
