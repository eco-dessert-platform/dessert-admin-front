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
      const isServer = typeof window === 'undefined';

      if (isServer) {
        const { cookies } = await import('next/headers'),
          token = cookies().get('accessToken')?.value;

        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
      } else {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');

        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
      }

      return config;
    });

    this.axiosExtend = api;
  }
}

export default Service;
