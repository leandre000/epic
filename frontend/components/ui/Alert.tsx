import React from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  children,
  variant = 'info',
  title,
  onClose,
  className,
  ...props
}) => {
  const variants = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      icon: CheckCircle,
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: XCircle,
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-800',
      icon: AlertCircle,
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: Info,
    },
  };

  const variantStyles = variants[variant];
  const Icon = variantStyles.icon;

  return (
    <div
      className={cn(
        'border rounded-lg p-4',
        variantStyles.bg,
        variantStyles.border,
        className
      )}
      {...props}
    >
      <div className="flex items-start">
        <Icon className={cn('h-5 w-5 mr-3 mt-0.5', variantStyles.text)} />
        <div className="flex-1">
          {title && (
            <h3 className={cn('font-semibold mb-1', variantStyles.text)}>
              {title}
            </h3>
          )}
          <p className={cn('text-sm', variantStyles.text)}>{children}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className={cn('ml-4 text-gray-400 hover:text-gray-600', variantStyles.text)}
          >
            <XCircle className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

