import { useQuery } from '@tanstack/react-query';
import { DateRangeParams } from '@/src/shared/types/request';
import { analysisQueryKey } from './queryKey';
import analysisService from './service';

const useAccReviewChartQuery = (dateRange: DateRangeParams) =>
  useQuery({
    queryKey: analysisQueryKey.review('accumulation'),
    queryFn: () => analysisService.getReviewAccCount(dateRange)
  });

export default useAccReviewChartQuery;
