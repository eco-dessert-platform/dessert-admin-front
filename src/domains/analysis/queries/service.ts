import Service from '@/src/shared/queries/service';
import { ResultResponse } from '@/src/shared/types/response';
import { DateRangeParams } from '@/src/shared/types/request';
import objToParams from '@/src/shared/utils/objectToParams';
import { WishCountResponse } from '../types/wish-count';
import { UserCountResponse } from '../types/user-count';

class AnalysisService extends Service {
  async getWishCount({ startDate, endDate }: DateRangeParams) {
    const params = objToParams({ startDate, endDate });
    console.log('test', params);
    const { data } = await this.axiosExtend.get<ResultResponse<WishCountResponse>>(
      `/analytics/wishlistboards?${params}`
    );
    return data.result;
  }

  async getAllUserCount() {
    const { data } =
      await this.axiosExtend.get<ResultResponse<UserCountResponse>>(`/analytics/members/count`);
    return data.result;
  }

  async getNewUserCount({ startDate, endDate }: DateRangeParams) {
    const params = objToParams({ startDate, endDate });
    const { data } = await this.axiosExtend.get<ResultResponse<UserCountResponse>>(
      `/analytics/new-members/count?${params}`
    );
    return data.result;
  }
}

const analysisService = new AnalysisService();
export default analysisService;
