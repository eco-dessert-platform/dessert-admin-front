'use client';

import moment from 'moment';
import { useRecoilState } from 'recoil';
import { Button } from '@/src/shared/components/ui/button';
import { dateFilterState } from '@/src/domains/analysis/atoms/date-filter';
import { DatePickerWithRange } from './DatePickerWithRange';

export default function DateFilter() {
  const [dateRange, setDateRange] = useRecoilState(dateFilterState);

  const setToNow = (from: Date) => {
    setDateRange({
      from,
      to: moment().toDate()
    });
  };

  return (
    <section className="flex items-center justify-between gap-8">
      <div className="flex w-full gap-2">
        <Button variant="outline" onClick={() => setToNow(moment().subtract(1, 'months').toDate())}>
          1개월
        </Button>

        <Button variant="outline" onClick={() => setToNow(moment().subtract(3, 'months').toDate())}>
          3개월
        </Button>

        <Button variant="outline" onClick={() => setToNow(moment().subtract(6, 'months').toDate())}>
          6개월
        </Button>

        <Button
          variant="outline"
          onClick={() => setToNow(moment().subtract(12, 'months').toDate())}
        >
          12개월
        </Button>
      </div>
      <div className="w-full sm:w-auto">
        <DatePickerWithRange dateRange={dateRange} onDateRangeChange={setDateRange} />
      </div>
    </section>
  );
}
