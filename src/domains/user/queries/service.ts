import Service from '@/src/shared/queries/service';
import { ResultResponse } from '@/src/shared/types/response';
import { AllUserCountResponse } from '../types/user-count';

class UserService extends Service {
  async getAllUserCount() {
    const { data } = await this.axiosExtend.get<ResultResponse<AllUserCountResponse>>(
      `${process.env.NEXT_PUBLIC_MOCK_API_URL}/mock/all-user-count.json`
    );

    return data.result;
  }

  async getNewUserCount() {
    const { data } = await this.axiosExtend.get<ResultResponse<AllUserCountResponse>>(
      `${process.env.NEXT_PUBLIC_MOCK_API_URL}/mock/new-user-count.json`
    );

    return data.result;
  }
}

const userService = new UserService();
export default userService;
