
import { apiClient, ApiError, ApiResponseError, PagedResponse } from './axios'

type College = {
    id: string
    name: string
    isActive: boolean
}

export const getColleges = async () => {
    const response = await apiClient.get<PagedResponse<College>>('/college');
    const user = response.data;
    return user;
};

