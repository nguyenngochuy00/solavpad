import { BigNumber } from 'bignumber.js';
import { LAUNCHPAD_STATUS } from '../../constants';
import moment from 'moment';
// import { LAUNCHPAD_STATUS } from 'src/constants';

export const minimizeAddress = (address: string, start: number = 8, end: number = 8) => {
	if (!address) return 'N/A';
	if (address && address.length <= 16) return address;
	return `${address.slice(0, start)}...${address.slice(-end)}`;
};

export const formatNumberDownRound = (numberParam: number | string | undefined, decimal: number = 9) => {
	
	if (!numberParam) {
		return '0';
	}
	if (numberParam === null || numberParam === undefined) return '0';

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

export const hideWalletAddress = (s: string) => {
    if (typeof s !== "string") return "";
    if (s.length < 20) return s;
    return s.substring(0, 5) + "..." + s.substring(s.length - 8, s.length);
  };

export const formatTokenAllocation = (number: number | string, decimals: number) : string  => {
    if (typeof number === "number") {
        return `${formatNumberDownRound(number, decimals )}`;
    }
    if (typeof number === "string") {
        if (number.includes("-")) {
            const tempArr = number.split("-");
            if (tempArr.length >= 2) {
                const item1 = formatNumberDownRound( tempArr[0],decimals 
                );
                const item2 = formatNumberDownRound(
                    tempArr[1],
                    decimals
                );
                return `${item1} / ${item2}`;
            }
        } else {
            return `${formatNumberDownRound(number, decimals )}`;
        }
    }
	return ''
};

export const formatTimeStampAllocation = (timeStamp: number | string) : string => {
    if (typeof timeStamp == "number")
        return  moment.unix(timeStamp).utc().format("YYYY-MM-DD HH:mm:ss UTC");
    if (typeof timeStamp == "string") {
        if (timeStamp.includes("-")) {
            const tempArr = timeStamp.split("-");
            if (tempArr.length >= 2) {
                const item1 = moment.unix(Number(tempArr[0])) .utc().format("YYYY-MM-DD HH:mm:ss UTC");
                const item2 =moment.unix(Number(tempArr[1])).utc().format("YYYY-MM-DD HH:mm:ss UTC");
                return `${item1} <span class='mx-1 text-secondary'>to</span> ${item2}`;
            }
        } else {
            return (
                moment.unix(Number(timeStamp)).utc().format("YYYYYY-MM-DD HH:mm:ss UTC")
            );
        }
    }
	return ''
};