'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import api from '@/lib/api';
import { formatDate, formatCurrency } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import toast from 'react-hot-toast';

export default function JobDetailPage() {
  const { id } = useParams();
  const { isAuthenticated, user } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ['job', id],
    queryFn: async () => {
      const response = await api.get(`/jobs/${id}`);
      return response.data.data.job;
    },
  });

  const handleApply = async () => {
    if (!isAuthenticated) {
      toast.error('Please login to apply');
      return;
    }

    try {
      await api.post('/applications', {
        job: id,
        resume: 'resume-url', // This should be handled with file upload
        coverLetter: '',
      });
      toast.success('Application submitted successfully!');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to submit application');
    }
  };

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (!data) {
    return <div className="container mx-auto px-4 py-8">Job not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">{data.title}</CardTitle>
              <p className="text-lg text-gray-600">{data.company?.name}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-gray-700">{data.description}</p>
                </div>

                {data.requirements && data.requirements.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-2">Requirements</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {data.requirements.map((req: string, idx: number) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {data.responsibilities && data.responsibilities.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-2">Responsibilities</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {data.responsibilities.map((resp: string, idx: number) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Job Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-medium">
                  {data.location?.city || 'Remote'}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Employment Type</p>
                <p className="font-medium">{data.employmentType}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Experience Level</p>
                <p className="font-medium">{data.experienceLevel}</p>
              </div>
              {data.salary && (
                <div>
                  <p className="text-sm text-gray-600">Salary</p>
                  <p className="font-medium">
                    {formatCurrency(data.salary.min)} - {formatCurrency(data.salary.max)}
                  </p>
                </div>
              )}
              <div>
                <p className="text-sm text-gray-600">Posted</p>
                <p className="font-medium">{formatDate(data.createdAt)}</p>
              </div>
              {isAuthenticated && user?.role === 'job_seeker' && (
                <Button onClick={handleApply} className="w-full">
                  Apply Now
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

