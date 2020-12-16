import axios, {AxiosError} from 'axios'

const instance = axios.create ({
  baseURL : 'https://localhost:44344/api',
  headers: {'Accept': 'application/json'}
})

instance.interceptors.request.use(config => {
  const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
  }
    return config;
  },
  error => {
      Promise.reject(error)
  });
  
  export type PagedResponse<T> = {
  page: number;
  pageSize: number;
  firstPage: string;
  lastPage: string;
  totalPages: number;
  totalCount: number;
  nextPage: string;
  previousPage: string;
    data: T[]
  }
  export interface ApiError<T> extends AxiosError<T> {}
  export type ApiResponseError = { code: string, description: string }
  export const apiClient = instance;