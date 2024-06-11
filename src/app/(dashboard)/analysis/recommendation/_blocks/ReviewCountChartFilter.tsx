'use client';

import { useSetRecoilState } from 'recoil';
import moment from 'moment';
import { Button } from '@/src/shared/components/ui/button';
import { DatePickerWithRange } from '../../../../../domains/analysis/components/DatePickerWithRange';
import { reviewCountChartFilterDates } from '../../../../../domains/analysis/atoms/review';

export default function ReviewCountChartFilter() {
  const setReviewCountChartFilterDates = useSetRecoilState(reviewCountChartFilterDates);

  const handleClick = (from: Date) => {
    setReviewCountChartFilterDates({
      from,
      to: moment().toDate()
    });
  };

  return (
    <section className="flex w-full flex-col items-center justify-between sm:flex-row">
      <div className="grid w-full grid-cols-4 gap-2 py-5 sm:w-auto sm:px-14">
        <Button
          variant="outline"
          onClick={() => handleClick(moment().subtract(1, 'months').toDate())}
        >
          1개월
        </Button>

        <Button
          variant="outline"
          onClick={() => handleClick(moment().subtract(3, 'months').toDate())}
        >
          3개월
        </Button>

        <Button
          variant="outline"
          onClick={() => handleClick(moment().subtract(6, 'months').toDate())}
        >
          6개월
        </Button>

        <Button
          variant="outline"
          onClick={() => handleClick(moment().subtract(12, 'months').toDate())}
        >
          12개월
        </Button>
      </div>
      <div className="w-full sm:w-auto">
        <DatePickerWithRange />
      </div>
    </section>
  );
}
