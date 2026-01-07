import React from 'react';
import { cn } from '@/lib/utils';

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  label,
  className,
  ...props
}) => {
  if (orientation === 'vertical') {
    return (
      <div
        className={cn('w-px bg-gray-200 self-stretch', className)}
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div className={cn('flex items-center my-4', className)}>
        <hr className="flex-1 border-gray-200" />
        <span className="px-4 text-sm text-gray-500">{label}</span>
        <hr className="flex-1 border-gray-200" />
      </div>
    );
  }

  return <hr className={cn('border-gray-200 my-4', className)} {...props} />;
};

