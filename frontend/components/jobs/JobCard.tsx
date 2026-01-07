import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { formatDate, formatCurrency } from '@/lib/utils';

interface JobCardProps {
  job: {
    _id: string;
    title: string;
    company?: {
      name: string;
      logo?: string;
    };
    location?: {
      city?: string;
      country?: string;
    };
    employmentType: string;
    salary?: {
      min: number;
      max: number;
      currency: string;
    };
    createdAt: string;
  };
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Link href={`/jobs/${job._id}`}>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
        <CardHeader>
          <CardTitle className="text-xl">{job.title}</CardTitle>
          <p className="text-sm text-gray-600">{job.company?.name}</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="font-medium">Location:</span>{' '}
              {job.location?.city || 'Remote'}
            </p>
            <p className="text-sm">
              <span className="font-medium">Type:</span> {job.employmentType}
            </p>
            {job.salary && (
              <p className="text-sm">
                <span className="font-medium">Salary:</span>{' '}
                {formatCurrency(job.salary.min)} - {formatCurrency(job.salary.max)}
              </p>
            )}
            <p className="text-xs text-gray-500 mt-4">
              Posted {formatDate(job.createdAt)}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

