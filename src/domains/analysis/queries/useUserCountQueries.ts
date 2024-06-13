import { useQueries } from '@tanstack/react-query';
import { DateRangeParams } from '@/src/shared/types/request';
import { analysisQueryKey } from './queryKey';
import analysisService from './service';

const useUserCountQueries = (dateRange: DateRangeParams) =>
  useQueries({
    queries: [
      {
        queryKey: analysisQueryKey.user('all'),
        queryFn: () => analysisService.getAllUserCount()
      },
      {
        queryKey: analysisQueryKey.user('new'),
        queryFn: () => analysisService.getNewUserCount(dateRange)
      }
    ]
  });

export default useUserCountQueries;
