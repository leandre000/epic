import React from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  onRemove?: () => void;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
}

export const Chip: React.FC<ChipProps> = ({
  children,
  onRemove,
  variant = 'default',
  className,
  ...props
}) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-1 hover:opacity-70 transition-opacity"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </span>
  );
};

