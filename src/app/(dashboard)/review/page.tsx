import moment from 'moment';

import ReviewCountChart from '@/src/domains/review/components/ReviewCountChart';
import ReviewCountChartFilter from '@/src/domains/review/components/ReviewCountChartFilter';

export default async function ReviewPage() {
  // Get the current date
  const currentDate = moment();
  // Subtract one month from the current date
  const dateOneMonthAgo = currentDate.subtract(1, 'months').format('YYYY-MM-DD');

  return (
    <>
      <section className="flex w-full">
        <ReviewCountChartFilter />
      </section>
      <section className="flex h-[300px] w-full">
        <ReviewCountChart startDate={dateOneMonthAgo} />
      </section>
    </>
  );
}
