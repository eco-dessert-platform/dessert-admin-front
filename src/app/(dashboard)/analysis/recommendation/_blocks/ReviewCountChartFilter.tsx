'use client';

import { useRecoilState } from 'recoil';
import { reviewCountChartFilterDates } from '@/src/domains/analysis/atoms/review';
import DateFilter from '@/src/domains/analysis/components/DateFilter';

export default function ReviewCountChartFilter() {
  const [dates, setDates] = useRecoilState(reviewCountChartFilterDates);

  return <DateFilter dateRange={dates} onDateRangeChange={setDates} />;
}
