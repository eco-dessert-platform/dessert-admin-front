import moment from 'moment';
import { atom } from 'recoil';

export const reviewCountChartFilterDates = atom<{
  from: Date | undefined;
  to: Date | undefined;
}>({
  key: 'reviewCountChartFilterStartDate',
  default: {
    from: moment().subtract(1, 'months').toDate(),
    to: moment().toDate()
  }
});
