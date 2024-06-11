'use client';
'use client';

import { useRecoilState } from 'recoil';
import DateFilter from '@/src/domains/analysis/components/DateFilter';
import { reviewAccCountChartFilterDates } from '@/src/domains/analysis/atoms/review';

export default function ReviewCountChartFilter() {
  const [dates, setDates] = useRecoilState(reviewAccCountChartFilterDates);

  return <DateFilter dateRange={dates} onDateRangeChange={setDates} />;
}
