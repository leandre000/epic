/**
 * API helpers - DRY principle
 * Simplifies API calls
 */
import api from './api';
import toast from 'react-hot-toast';

export const apiCall = async <T>(
  request: () => Promise<{ data: T }>,
  options?: { showSuccess?: boolean; successMessage?: string; showError?: boolean }
): Promise<T> => {
  try {
    const response = await request();
    if (options?.showSuccess) {
      toast.success(options.successMessage || 'Operation successful');
    }
    return response.data;
  } catch (error: any) {
    if (options?.showError !== false) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
    throw error;
  }
};

export const createResource = <T>(endpoint: string) => ({
  getAll: (params?: any) => apiCall(() => api.get(endpoint, { params })),
  getById: (id: string) => apiCall(() => api.get(`${endpoint}/${id}`)),
  create: (data: any) => apiCall(() => api.post(endpoint, data), { showSuccess: true }),
  update: (id: string, data: any) => apiCall(() => api.put(`${endpoint}/${id}`, data), { showSuccess: true }),
  delete: (id: string) => apiCall(() => api.delete(`${endpoint}/${id}`), { showSuccess: true }),
});

