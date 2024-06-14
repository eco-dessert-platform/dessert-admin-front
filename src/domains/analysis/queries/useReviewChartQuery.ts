import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { DateRangeParams } from '@/src/shared/types/request';
import { analysisQueryKey } from './queryKey';
import analysisService from './service';

const useReviewChartQuery = (dateRange: DateRangeParams) =>
  useQuery({
    queryKey: analysisQueryKey.review({ type: 'day', ...dateRange }),
    queryFn: () => analysisService.getReviewCount(dateRange),
    placeholderData: keepPreviousData
  });

export default useReviewChartQuery;
