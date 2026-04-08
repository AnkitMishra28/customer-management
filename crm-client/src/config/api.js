const LOCAL_BACKEND = "http://localhost:3000";

const isBrowser = typeof window !== "undefined";
const isDev = import.meta.env.DEV;

// Optional override for non-standard setups.
const envBase = import.meta.env.VITE_API_BASE_URL;

const isLocalAddress = (value = "") => /localhost|127\.0\.0\.1/i.test(value);

const getApiBaseUrl = () => {
  if (isDev) {
    return envBase || LOCAL_BACKEND;
  }

  // In production, never allow loopback targets from browser to avoid CORS/private-network issues.
  if (envBase && !isLocalAddress(envBase)) {
    return envBase;
  }

  return isBrowser ? window.location.origin : "";
};

export const API_BASE_URL = getApiBaseUrl();

export const getApiUrl = (endpoint) => {
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;
  return `${API_BASE_URL}/${cleanEndpoint}`;
};