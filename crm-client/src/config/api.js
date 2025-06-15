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
    // Based on the server routes, most endpoints don't need /api prefix
    // Only specific endpoints that are explicitly defined with /api in the server
    const apiPrefixEndpoints = [
      'api/tasks',
      'api/leads', 
      'api/followups',
      'api/tickets',
      'api/reviews',
      'api/notifications',
      'api/activity-logs'
    ];
    
    // Check if this endpoint should have /api prefix
    const needsApiPrefix = apiPrefixEndpoints.some(apiEndpoint => 
      cleanEndpoint.startsWith(apiEndpoint)
    );
    
    if (needsApiPrefix) {
      return `${window.location.origin}/${cleanEndpoint}`;
    } else {
      return `${window.location.origin}/${cleanEndpoint}`;
    }
  }
}; 