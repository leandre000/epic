import api from './api';

export const trackEvent = async (event: string, metadata?: any) => {
  try {
    await api.post('/analytics', {
      event,
      metadata,
    });
  } catch (error) {
    console.error('Analytics tracking failed:', error);
  }
};

export const trackJobView = (jobId: string) => {
  trackEvent('job_view', { jobId });
};

export const trackApplicationSubmit = (jobId: string) => {
  trackEvent('application_submit', { jobId });
};

export const trackSearch = (query: string) => {
  trackEvent('search', { query });
};

