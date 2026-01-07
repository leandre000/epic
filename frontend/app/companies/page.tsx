'use client';

import { useQuery } from '@tanstack/react-query';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import api from '@/lib/api';
import Link from 'next/link';

export default function CompaniesPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['companies'],
    queryFn: async () => {
      const response = await api.get('/companies');
      return response.data.data;
    },
  });

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading companies...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Browse Companies</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.companies?.map((company: any) => (
          <Link key={company._id} href={`/companies/${company._id}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle>{company.name}</CardTitle>
                <p className="text-sm text-gray-600">{company.industry}</p>
              </CardHeader>
              <CardContent>
                {company.description && (
                  <p className="text-sm text-gray-700 line-clamp-3">
                    {company.description}
                  </p>
                )}
                {company.location && (
                  <p className="text-xs text-gray-500 mt-2">
                    {company.location.city}, {company.location.country}
                  </p>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

