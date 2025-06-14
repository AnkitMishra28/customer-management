// API Configuration for different environments
const getApiBaseUrl = () => {
  // Check if we're in development or production
  if (import.meta.env.DEV) {
    // Development environment - use localhost
    return 'http://localhost:3000';
  } else {
    // Production environment - use Vercel deployment URL
    // This will be the same domain as the frontend, just different path
    return window.location.origin;
  }
};

export const API_BASE_URL = getApiBaseUrl();

// Helper function to get full API URL
export const getApiUrl = (endpoint) => {
  // Remove leading slash if present
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  
  if (import.meta.env.DEV) {
    // In development, use localhost:3000
    return `http://localhost:3000/${cleanEndpoint}`;
  } else {
    // In production, use the same domain
    // Note: Some endpoints need /api prefix, others don't
    // Routes like /jwt, /users, /adminCount, etc. don't need /api prefix
    // Routes like /api/tasks, /api/leads, etc. already have /api prefix
    if (cleanEndpoint.startsWith('api/')) {
      return `${window.location.origin}/${cleanEndpoint}`;
    } else {
      return `${window.location.origin}/${cleanEndpoint}`;
    }
  }
}; 