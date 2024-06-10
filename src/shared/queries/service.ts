import axios, { AxiosInstance } from 'axios';

class Service {
  public axiosExtend: AxiosInstance;

  private baseURL = process.env.NEXT_PUBLIC_API_URL;

  constructor() {
    const api = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    api.interceptors.request.use(async (config) => {
      const newConfig = { ...config };
      const isServer = typeof window === 'undefined';

      if (isServer) {
        const { cookies } = await import('next/headers');
        const token = cookies().get('accessToken')?.value;

        if (token) {
          newConfig.headers.Authorization = `Bearer ${token}`;
        }
      } else {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');

        if (token) {
          newConfig.headers.Authorization = `Bearer ${token}`;
        }
      }

      return newConfig;
    });

    this.axiosExtend = api;
  }
}

export default Service;
