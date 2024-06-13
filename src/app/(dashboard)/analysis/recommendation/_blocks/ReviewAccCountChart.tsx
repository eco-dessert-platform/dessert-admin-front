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
import moment from 'moment';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/src/shared/components/ui/card';
import { ReviewChartData } from '@/src/domains/analysis/types/review';
import reviewCountMockData from '@/src/domains/analysis/mock/reviewCountMockData.json';
import { dateFilterState } from '@/src/domains/analysis/atoms/date-filter';

export default function ReviewAccCountChart() {
  const { from, to } = useRecoilValue(dateFilterState);

  const filteredData = reviewCountMockData.filter((el) => {
    const currentDate = new Date(el.date);

    if (!from && !to) return false;

    return (
      currentDate >=
        moment(from ?? to)
          .startOf('day')
          .toDate() &&
      currentDate <=
        moment(to ?? from)
          .endOf('day')
          .toDate()
    );
  });

  return (
    <div className="flex h-full w-full flex-col gap-2">
      <CustomTotal data={filteredData} />
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={filteredData}
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
          <Line type="monotone" dataKey="value" name="리뷰" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function CustomTotal({ data }: { data: ReviewChartData[] }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  return (
    <div className="grid grid-cols-2 gap-3 py-3 sm:grid-cols-4 sm:px-14">
      <Card>
        <CardHeader>
          <CardTitle>총 리뷰</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{total}</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
