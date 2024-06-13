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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/src/shared/components/ui/card';
import { dateFilterParamsState } from '@/src/domains/analysis/atoms/date-filter';
import useAccReviewChartQuery from '@/src/domains/analysis/queries/useAccReviewChartQuery';

export default function ReviewAccCountChart() {
  const { startDate, endDate } = useRecoilValue(dateFilterParamsState);
  const { data: accReviewCount } = useAccReviewChartQuery({ startDate, endDate });

  return (
    <div className="flex h-full w-full flex-col gap-2">
      <Card className="w-80">
        <CardHeader>
          <CardTitle>총 리뷰</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{accReviewCount?.at(-1)?.count}</CardDescription>
        </CardContent>
      </Card>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={accReviewCount}
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
          <Line type="monotone" dataKey="value" name="누적 리뷰" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
