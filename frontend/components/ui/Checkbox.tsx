import React from 'react';
import { cn } from '@/lib/utils';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  className,
  ...props
}) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        className={cn(
          'w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500',
          className
        )}
        {...props}
      />
      {label && <span className="text-sm text-gray-700">{label}</span>}
    </label>
  );
};

