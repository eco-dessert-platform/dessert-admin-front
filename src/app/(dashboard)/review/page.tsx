import ReviewCountChart from '@/src/domains/review/components/ReviewCountChart';
import ReviewCountChartFilter from '@/src/domains/review/components/ReviewCountChartFilter';

export default async function ReviewPage() {
  return (
    <>
      <section className="flex w-full">
        <ReviewCountChartFilter />
      </section>
      <section className="flex h-[500px] w-full">
        <ReviewCountChart />
      </section>
    </>
  );
}
