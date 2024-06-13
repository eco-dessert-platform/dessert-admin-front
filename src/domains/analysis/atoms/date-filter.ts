import moment from 'moment';
import { DateRange } from 'react-day-picker';
import { atom } from 'recoil';

export const dateFilterState = atom<DateRange>({
  key: 'dateFilterState',
  default: {
    from: moment().subtract(1, 'months').toDate(),
    to: moment().toDate()
  }
});
