/**
 * Form helpers - DRY principle
 * Centralizes common form logic
 */

export const getFormErrors = (errors: any[]): Record<string, string> => {
  const formErrors: Record<string, string> = {};
  errors?.forEach((err: any) => {
    formErrors[err.param || err.field] = err.msg || err.message;
  });
  return formErrors;
};

export const handleFormError = (error: any): Record<string, string> => {
  if (error.response?.data?.errors) {
    return getFormErrors(error.response.data.errors);
  }
  return { _general: error.response?.data?.message || 'An error occurred' };
};

