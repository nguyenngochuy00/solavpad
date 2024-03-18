import moment from 'moment';

export const getRemainingTime = futureTime => {
	if (!futureTime) return '';
	const temp = moment(futureTime).fromNow();
	console.log('tempppp', temp);
	return temp;
};
