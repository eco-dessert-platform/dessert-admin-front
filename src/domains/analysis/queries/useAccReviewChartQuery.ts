import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { DateRangeParams } from '@/src/shared/types/request';
import { analysisQueryKey } from './queryKey';
import analysisService from './service';

const useAccReviewChartQuery = (dateRange: DateRangeParams) =>
  useQuery({
    queryKey: analysisQueryKey.review({ type: 'accumulation', ...dateRange }),
    queryFn: () => analysisService.getReviewAccCount(dateRange),
    placeholderData: keepPreviousData
  });

export default useAccReviewChartQuery;
