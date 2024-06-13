import ReviewAccCountChart from './_blocks/ReviewAccCountChart';
import ReviewCountChart from './_blocks/ReviewCountChart';

export default async function ReviewPage() {
  return (
    <div className="my-20 flex flex-col gap-20">
      <div>
        <h1 className="text-2xl font-bold">전체 누적 리뷰 수</h1>
        <section className="flex h-[500px] w-full">
          <ReviewAccCountChart />
        </section>
      </div>

      <div>
        <h1 className="text-2xl font-bold">날짜별 리뷰 작성 수</h1>
        <section className="flex h-[500px] w-full">
          <ReviewCountChart />
        </section>
      </div>
    </div>
  );
}
