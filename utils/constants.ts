import Constants from 'expo-constants';

// Get API base URL from app config or fallback to default
export const API_BASE_URL = Constants.expoConfig?.extra?.apiBaseUrl || 'https://srv1555.hstgr.io';

// API endpoints
export const API_ENDPOINTS = {
  LOGIN: '/api/auth/login',
  REGISTER: '/api/auth/register',
  VERIFY_REGISTRATION: '/api/auth/verify-registration',
  FORGOT_PASSWORD: '/api/auth/forgot-password',
  RESET_PASSWORD: '/api/auth/reset-password',
  COURSES: '/api/courses',
  USER_COURSES: '/api/user-courses',
  COURSE_DETAILS: '/api/courses',
  ENROLL_COURSE: '/api/courses/enroll',
  COURSE_PROGRESS: '/api/courses/progress',
};

// Storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_DATA: 'user_data',
  REFRESH_TOKEN: 'refresh_token',
};