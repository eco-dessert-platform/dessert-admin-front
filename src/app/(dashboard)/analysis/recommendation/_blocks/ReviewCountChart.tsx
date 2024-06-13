'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { useRecoilValue } from 'recoil';
import { dateFilterParamsState } from '@/src/domains/analysis/atoms/date-filter';
import useReviewChartQuery from '@/src/domains/analysis/queries/useReviewChartQuery';

export default function ReviewCountChart() {
  const { startDate, endDate } = useRecoilValue(dateFilterParamsState);
  const { data: reviewCount } = useReviewChartQuery({ startDate, endDate });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={reviewCount?.dateAndCount}
        margin={{
          top: 5,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" name="리뷰" />
      </LineChart>
    </ResponsiveContainer>
  );
}
