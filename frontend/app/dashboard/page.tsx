'use client';

import { useAuth } from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import api from '@/lib/api';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  const { data: applications } = useQuery({
    queryKey: ['applications'],
    queryFn: async () => {
      const response = await api.get('/applications');
      return response.data.data;
    },
    enabled: isAuthenticated && user?.role === 'job_seeker',
  });

  const { data: jobs } = useQuery({
    queryKey: ['my-jobs'],
    queryFn: async () => {
      const response = await api.get('/jobs');
      return response.data.data;
    },
    enabled: isAuthenticated && user?.role === 'employer',
  });

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Welcome back, {user?.firstName}!
      </h1>

      {user?.role === 'job_seeker' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">My Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {applications?.applications?.map((app: any) => (
              <Card key={app._id}>
                <CardHeader>
                  <CardTitle>{app.job?.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Status: <span className="font-medium">{app.status}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Applied on {new Date(app.createdAt).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {user?.role === 'employer' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">My Job Postings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jobs?.jobs?.map((job: any) => (
              <Card key={job._id}>
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Status: <span className="font-medium">{job.status}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Posted on {new Date(job.createdAt).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

