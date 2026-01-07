/**
 * Reusable form field component - DRY principle
 */
import React from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';

interface FormFieldProps {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'password' | 'textarea' | 'select';
  value: any;
  onChange: (value: any) => void;
  error?: string;
  options?: { value: string; label: string }[];
  required?: boolean;
  [key: string]: any;
}

export const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  type = 'text',
  value,
  onChange,
  error,
  options = [],
  required,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  if (type === 'textarea') {
    return (
      <Textarea
        label={label}
        name={name}
        value={value}
        onChange={handleChange}
        error={error}
        required={required}
        {...props}
      />
    );
  }

  if (type === 'select') {
    return (
      <Select
        label={label}
        name={name}
        value={value}
        onChange={handleChange}
        error={error}
        options={options}
        required={required}
        {...props}
      />
    );
  }

  return (
    <Input
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      error={error}
      required={required}
      {...props}
    />
  );
};

