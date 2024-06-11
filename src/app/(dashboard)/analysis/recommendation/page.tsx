import ReviewCountChart from './_blocks/ReviewCountChart';
import ReviewCountChartFilter from './_blocks/ReviewCountChartFilter';

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
