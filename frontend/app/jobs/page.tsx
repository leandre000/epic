'use client';

import { useQuery } from '@tanstack/react-query';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import api from '@/lib/api';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

export default function JobsPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      const response = await api.get('/jobs');
      return response.data.data;
    },
  });

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading jobs...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Browse Jobs</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.jobs?.map((job: any) => (
          <Link key={job._id} href={`/jobs/${job._id}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <p className="text-sm text-gray-600">{job.company?.name}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Location:</span> {job.location?.city || 'Remote'}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Type:</span> {job.employmentType}
                  </p>
                  {job.salary && (
                    <p className="text-sm">
                      <span className="font-medium">Salary:</span> ${job.salary.min} - ${job.salary.max}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-4">
                    Posted {formatDate(job.createdAt)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

