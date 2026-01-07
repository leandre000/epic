'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import api from '@/lib/api';
import { useAuth } from '@/hooks/useAuth';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const response = await api.get('/profile');
      return response.data.data.user;
    },
    enabled: isAuthenticated,
  });

  const updateProfile = useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put('/profile', data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      toast.success('Profile updated successfully!');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to update profile');
    },
  });

  if (!isAuthenticated) {
    router.push('/login');
    return null;
  }

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const data = Object.fromEntries(formData);
              updateProfile.mutate(data);
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="First Name"
                name="firstName"
                defaultValue={data?.firstName}
                required
              />
              <Input
                label="Last Name"
                name="lastName"
                defaultValue={data?.lastName}
                required
              />
            </div>
            <Input
              label="Email"
              type="email"
              name="email"
              defaultValue={data?.email}
              required
            />
            <Input
              label="Phone"
              name="phone"
              defaultValue={data?.phone}
            />
            <Textarea
              label="Bio"
              name="bio"
              defaultValue={data?.bio}
              rows={4}
            />
            <Button type="submit" isLoading={updateProfile.isPending}>
              Update Profile
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

