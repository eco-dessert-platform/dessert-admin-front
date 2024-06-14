import { format } from 'date-fns';
import moment from 'moment';
import { DateRange } from 'react-day-picker';
import { atom, selector } from 'recoil';

export const dateFilterState = atom<DateRange>({
  key: 'dateFilterState',
  default: {
    from: moment().subtract(1, 'months').toDate(),
    to: moment().toDate()
  }
});

export const dateFilterParamsState = selector({
  key: 'dateFilterParamsState',
  get: ({ get }) => {
    const { from, to } = get(dateFilterState);
    const startDate = from && format(from, 'yyyy-MM-d');
    const endDate = to && format(to, 'yyyy-MM-d');
    return { startDate, endDate };
  }
});
