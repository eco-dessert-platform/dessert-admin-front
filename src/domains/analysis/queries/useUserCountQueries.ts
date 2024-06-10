import { useQueries } from '@tanstack/react-query';
import { analysisQueryKey } from './queryKey';
import analysisService from './service';

const useUserCountQueries = () =>
  useQueries({
    queries: [
      { queryKey: analysisQueryKey.user('all'), queryFn: () => analysisService.getAllUserCount() },
      { queryKey: analysisQueryKey.user('new'), queryFn: () => analysisService.getNewUserCount() }
    ]
  });

export default useUserCountQueries;
