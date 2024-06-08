import Service from '@/src/shared/queries/service';
import { ResultResponse } from '@/src/shared/types/response';
import { WishCountResponse } from '../types/wish-count';

class WishService extends Service {
  async getWishCount() {
    const { data } = await this.axiosExtend.get<ResultResponse<WishCountResponse>>(
      `${process.env.NEXT_PUBLIC_MOCK_API_URL}/mock/wish-count.json`
    );
    return data.result;
  }
}

const wishService = new WishService();
export default wishService;
