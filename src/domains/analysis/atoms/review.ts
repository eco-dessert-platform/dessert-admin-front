import moment from 'moment';
import { atom } from 'recoil';
import { DateRange } from 'react-day-picker';

export const reviewCountChartFilterDates = atom<DateRange>({
  key: 'reviewCountChartFilterStartDate',
  default: {
    from: moment().subtract(1, 'months').toDate(),
    to: moment().toDate()
  }
});

export const reviewAccCountChartFilterDates = atom<DateRange>({
  key: 'reviewAccCountChartFilterStartDate',
  default: {
    from: moment().subtract(1, 'months').toDate(),
    to: moment().toDate()
  }
});
