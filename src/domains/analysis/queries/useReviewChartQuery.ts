import { useQuery } from '@tanstack/react-query';
import { DateRangeParams } from '@/src/shared/types/request';
import { analysisQueryKey } from './queryKey';
import analysisService from './service';

const useReviewChartQuery = (dateRange: DateRangeParams) =>
  useQuery({
    queryKey: analysisQueryKey.review('day'),
    queryFn: () => analysisService.getReviewCount(dateRange)
  });

export default useReviewChartQuery;
