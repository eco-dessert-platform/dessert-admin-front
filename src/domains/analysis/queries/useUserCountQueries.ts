import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { DateRangeParams } from '@/src/shared/types/request';
import { analysisQueryKey } from './queryKey';
import analysisService from './service';

export const useAllUserCountQuery = () =>
  useQuery({
    queryKey: analysisQueryKey.user({ type: 'all' }),
    queryFn: () => analysisService.getAllUserCount()
  });

export const useNewUserCountQuery = (dateRange: DateRangeParams) =>
  useQuery({
    queryKey: analysisQueryKey.user({ type: 'new', ...dateRange }),
    queryFn: () => analysisService.getNewUserCount(dateRange),
    placeholderData: keepPreviousData
  });
