'use client';

import {
  CartesianGrid,
  Legend,
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
  const { data: wishCount } = useWishCountQuery(dateRange);

  return (
    <section className="flex h-[500px] w-full flex-col  ">
      <h1 className="text-2xl font-bold">찜 이용 횟수</h1>

      <Card className="my-3 w-80">
        <CardHeader>
          <CardTitle>총 찜 이용 횟수</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{wishCount?.total}</CardDescription>
        </CardContent>
      </Card>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={wishCount?.dateAndCount}
          margin={{
            top: 5,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <XAxis dataKey="date" />
          <YAxis />
          <Line name="찜 이용 횟수" className="stroke-purple-100" type="monotone" dataKey="count" />
          <ReferenceLine
            y={wishCount?.average}
            label={{ value: `평균 값(${wishCount?.average})`, position: 'insideBottomRight' }}
            stroke="red"
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}

export default WishCountChart;
