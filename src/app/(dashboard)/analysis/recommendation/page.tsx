import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { analysisQueryKey } from '@/src/domains/analysis/queries/queryKey';
import analysisService from '@/src/domains/analysis/queries/service';
import { INITIAL_DATE_RANGE } from '@/src/shared/constants/date';
import ReviewCountChart from './_blocks/ReviewCountChart';
import ReviewAccCountChart from './_blocks/ReviewAccCountChart';

export default async function ReviewPage() {
  const queryClient = new QueryClient();
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: analysisQueryKey.review({ type: 'day', ...INITIAL_DATE_RANGE }),
      queryFn: () => analysisService.getReviewCount(INITIAL_DATE_RANGE)
    }),

    queryClient.prefetchQuery({
      queryKey: analysisQueryKey.review({ type: 'accumulation', ...INITIAL_DATE_RANGE }),
      queryFn: () => analysisService.getReviewAccCount(INITIAL_DATE_RANGE)
    })
  ]);

  return (
    <div className="my-20 flex flex-col gap-20">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div>
          <h1 className="mb-4 text-2xl font-bold">전체 누적 리뷰 수</h1>
          <section className="flex h-[500px] w-full">
            <ReviewAccCountChart />
          </section>
        </div>

        <div>
          <h1 className="mb-4 text-2xl font-bold">날짜별 리뷰 작성 수</h1>
          <section className="flex h-[500px] w-full">
            <ReviewCountChart />
          </section>
        </div>
      </HydrationBoundary>
    </div>
  );
}
