import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import analysisService from '@/src/domains/analysis/queries/service';
import { analysisQueryKey } from '@/src/domains/analysis/queries/queryKey';
import { INITIAL_DATE_RANGE } from '@/src/shared/constants/date';
import UserCountSection from './_blocks/UserCountSection';
import WishCountChart from './_blocks/WishCountChart';

async function ActivePage() {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: analysisQueryKey.wish(INITIAL_DATE_RANGE),
      queryFn: () => analysisService.getWishCount(INITIAL_DATE_RANGE)
    }),
    queryClient.prefetchQuery({
      queryKey: analysisQueryKey.user({ type: 'all', ...INITIAL_DATE_RANGE }),
      queryFn: () => analysisService.getAllUserCount()
    }),
    queryClient.prefetchQuery({
      queryKey: analysisQueryKey.user({ type: 'new', ...INITIAL_DATE_RANGE }),
      queryFn: () => analysisService.getNewUserCount(INITIAL_DATE_RANGE)
    })
  ]);

  return (
    <section className="flex flex-col gap-20 py-20">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <UserCountSection />
        <WishCountChart />
      </HydrationBoundary>
    </section>
  );
}

export default ActivePage;
