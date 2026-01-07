import React from 'react';
import { cn } from '@/lib/utils';

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  label,
  className,
  ...props
}) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          {...props}
        />
        <div
          className={cn(
            'w-11 h-6 bg-gray-200 rounded-full transition-colors',
            props.checked && 'bg-blue-600'
          )}
        >
          <div
            className={cn(
              'absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform',
              props.checked && 'transform translate-x-5'
            )}
          />
        </div>
      </div>
      {label && <span className="text-sm text-gray-700">{label}</span>}
    </label>
  );
};

