import { useQuery } from '@tanstack/react-query';
import { analysisQueryKey } from './queryKey';
import analysisService from './service';

const useWishCountQuery = () =>
  useQuery({
    queryKey: analysisQueryKey.wish(),
    queryFn: () => analysisService.getWishCount()
  });

export default useWishCountQuery;
