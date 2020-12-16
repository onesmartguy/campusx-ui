/**
 * API call for logout user
 */
import GenericAPIService from "./GenericRestService";

import { apiClient, ApiError, ApiResponseError } from './axios'

type LoginRequest = {
  username: String;
  password: String;
}
type LoginResponse = {
    userName: string
    role: string
    originalUserName: string,
    accessToken: string,
    refreshToken: string,
    isImpersonating: boolean
}

export const login = async (username: string, password: string) => {
    const response = await apiClient.post<LoginResponse>('/login', {username, password});
    const user = response.data;
    localStorage.setItem("auth_token", user.accessToken)
    return user;
};

export const logout = async () => {
  const response = await apiClient.get<LoginResponse>('/logout');
  return true;
};