'use client';

import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/src/shared/components/ui/card';
import useWishCountQuery from '@/src/domains/analysis/queries/useWishChartQuery';
import { useRecoilValue } from 'recoil';
import { dateFilterParamsState } from '@/src/domains/analysis/atoms/date-filter';

function WishCountChart() {
  const dateRange = useRecoilValue(dateFilterParamsState);
  const { data: wishCount, error } = useWishCountQuery(dateRange);

  if (error) return '에러';
  if (!wishCount) return null;

  return (
    <section className="h-[500px] w-full flex-col  gap-8 p-4">
      <h1 className="text-2xl font-bold">찜 이용 횟수</h1>

      <Card className="mx-14 my-3 w-80">
        <CardHeader>
          <CardTitle>총 찜 이용 횟수</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{wishCount.total}</CardDescription>
        </CardContent>
      </Card>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={wishCount.dateAndCount}>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <XAxis dataKey="date" />
          <YAxis label={{ value: '이용 횟수(회)', angle: -90, position: 'insideLeft' }} />
          <Line
            className="stroke-purple-100"
            type="monotone"
            dataKey="count"
            activeDot={{ r: 8 }}
          />
          <ReferenceLine
            y={wishCount.average}
            label={{ value: '평균 값', position: 'insideBottomRight' }}
            stroke="red"
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}

export default WishCountChart;
