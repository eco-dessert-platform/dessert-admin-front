import Service from '@/src/shared/queries/service';
import { ResultResponse } from '@/src/shared/types/response';
import { WishCountResponse } from '../types/wish-count';
import { UserCountResponse } from '../types/user-count';

class AnalysisService extends Service {
  async getWishCount() {
    const { data } = await this.axiosExtend.get<ResultResponse<WishCountResponse>>(
      `${process.env.NEXT_PUBLIC_MOCK_API_URL}/mock/wish-count.json`
    );
    return data.result;
  }

  async getAllUserCount() {
    const { data } = await this.axiosExtend.get<ResultResponse<UserCountResponse>>(
      `${process.env.NEXT_PUBLIC_MOCK_API_URL}/mock/all-user-count.json`
    );

    return data.result;
  }

  async getNewUserCount() {
    const { data } = await this.axiosExtend.get<ResultResponse<UserCountResponse>>(
      `${process.env.NEXT_PUBLIC_MOCK_API_URL}/mock/new-user-count.json`
    );

    return data.result;
  }
}

const analysisService = new AnalysisService();
export default analysisService;
