'use client';

import useWishCountQuery from '@/src/domains/analysis/queries/useWishChartQuery';
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

function WishCountChart() {
  const { data: wishCount } = useWishCountQuery();

  if (!wishCount) return null;

  return (
    <section className="flex h-[500px] w-full flex-col items-center justify-center gap-8 p-4">
      <div className="flex w-full items-end justify-between">
        <h1 className="text-xl">위시리스트 이용 비율</h1>
        <span>누적: {wishCount.total}회</span>
      </div>
      <ResponsiveContainer className="h-full w-full">
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