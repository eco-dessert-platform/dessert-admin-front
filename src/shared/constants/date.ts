import moment from 'moment';

const now = moment().format('YYYY-MM-DD');
const oneMonthAgo = moment().subtract(1, 'months').format('YYYY-MM-DD');
export const INITIAL_DATE_RANGE = { startDate: oneMonthAgo, endDate: now };
