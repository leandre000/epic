'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { JOB_CATEGORIES, EMPLOYMENT_TYPES, EXPERIENCE_LEVELS } from '@/lib/constants';

interface JobFiltersProps {
  onFilterChange: (filters: any) => void;
}

export const JobFilters: React.FC<JobFiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    employmentType: '',
    experienceLevel: '',
    location: '',
    search: '',
  });

  const handleChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const emptyFilters = {
      category: '',
      employmentType: '',
      experienceLevel: '',
      location: '',
      search: '',
    };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  return (
    <Card>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Search</label>
          <input
            type="text"
            placeholder="Search jobs..."
            value={filters.search}
            onChange={(e) => handleChange('search', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            value={filters.category}
            onChange={(e) => handleChange('category', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">All Categories</option>
            {JOB_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Employment Type</label>
          <select
            value={filters.employmentType}
            onChange={(e) => handleChange('employmentType', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">All Types</option>
            {EMPLOYMENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Experience Level</label>
          <select
            value={filters.experienceLevel}
            onChange={(e) => handleChange('experienceLevel', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">All Levels</option>
            {EXPERIENCE_LEVELS.map((level) => (
              <option key={level} value={level}>
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Location</label>
          <input
            type="text"
            placeholder="City or Country"
            value={filters.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <Button variant="outline" onClick={clearFilters} className="w-full">
          Clear Filters
        </Button>
      </div>
    </Card>
  );
};

