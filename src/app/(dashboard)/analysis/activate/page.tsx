import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import chartService from '@/src/domains/analysis/queries/service';
import { analysisQueryKey } from '@/src/domains/analysis/queries/queryKey';
import UserCountSection from './_blocks/UserCountSection';
import WishCountChart from './_blocks/WishCountChart';

async function ActivePage() {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: analysisQueryKey.wish(),
      queryFn: () => chartService.getWishCount()
    }),
    queryClient.prefetchQuery({
      queryKey: analysisQueryKey.user('all'),
      queryFn: () => chartService.getAllUserCount()
    }),
    queryClient.prefetchQuery({
      queryKey: analysisQueryKey.user('new'),
      queryFn: () => chartService.getNewUserCount()
    })
  ]);

  return (
    <section className="flex flex-col gap-20">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <UserCountSection />
        <WishCountChart />
      </HydrationBoundary>
    </section>
  );
}

export default ActivePage;
