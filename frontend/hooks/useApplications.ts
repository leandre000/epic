import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';
import toast from 'react-hot-toast';

export const useApplications = (filters?: any) => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['applications', filters],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value) {
            params.append(key, value as string);
          }
        });
      }
      const response = await api.get(`/applications?${params.toString()}`);
      return response.data.data;
    },
  });

  const createApplication = useMutation({
    mutationFn: async (applicationData: any) => {
      const response = await api.post('/applications', applicationData);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applications'] });
      toast.success('Application submitted successfully!');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to submit application');
    },
  });

  const updateApplicationStatus = useMutation({
    mutationFn: async ({ id, status, notes }: { id: string; status: string; notes?: string }) => {
      const response = await api.put(`/applications/${id}/status`, { status, notes });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applications'] });
      toast.success('Application status updated!');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to update application status');
    },
  });

  return {
    applications: data?.applications || [],
    pagination: data?.pagination,
    isLoading,
    error,
    createApplication,
    updateApplicationStatus,
  };
};

