import { useQuery } from '@tanstack/react-query';
import { DateRangeParams } from '@/src/shared/types/request';
import { analysisQueryKey } from './queryKey';
import analysisService from './service';

const useWishCountQuery = (dateRange: DateRangeParams) =>
  useQuery({
    queryKey: analysisQueryKey.wish(),
    queryFn: () => analysisService.getWishCount(dateRange)
  });

export default useWishCountQuery;
