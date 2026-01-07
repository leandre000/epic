/**
 * Form hook - DRY principle
 * Simplifies form handling across components
 */
import { useState, useCallback } from 'react';
import { handleFormError } from '@/lib/formHelpers';
import toast from 'react-hot-toast';

export const useForm = <T extends Record<string, any>>(
  initialValues: T,
  onSubmit: (values: T) => Promise<any>
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = useCallback((name: keyof T, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as string]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as string];
        return newErrors;
      });
    }
  }, [errors]);

  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    e?.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      await onSubmit(values);
    } catch (error: any) {
      const formErrors = handleFormError(error);
      setErrors(formErrors);
      if (formErrors._general) {
        toast.error(formErrors._general);
      }
    } finally {
      setIsLoading(false);
    }
  }, [values, onSubmit]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
  }, [initialValues]);

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
    reset,
    setValues,
  };
};

