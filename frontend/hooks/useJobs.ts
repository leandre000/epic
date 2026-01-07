import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';
import toast from 'react-hot-toast';

export const useJobs = (filters?: any) => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['jobs', filters],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value) {
            params.append(key, value as string);
          }
        });
      }
      const response = await api.get(`/jobs?${params.toString()}`);
      return response.data.data;
    },
  });

  const createJob = useMutation({
    mutationFn: async (jobData: any) => {
      const response = await api.post('/jobs', jobData);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
      toast.success('Job created successfully!');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to create job');
    },
  });

  const updateJob = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: any }) => {
      const response = await api.put(`/jobs/${id}`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
      toast.success('Job updated successfully!');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to update job');
    },
  });

  const deleteJob = useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/jobs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
      toast.success('Job deleted successfully!');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to delete job');
    },
  });

  return {
    jobs: data?.jobs || [],
    pagination: data?.pagination,
    isLoading,
    error,
    createJob,
    updateJob,
    deleteJob,
  };
};

