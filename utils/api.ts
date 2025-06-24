import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as SecureStore from 'expo-secure-store';
import { API_BASE_URL, STORAGE_KEYS } from './constants';

class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor to add auth token
    this.api.interceptors.request.use(
      async (config) => {
        try {
          const token = await SecureStore.getItemAsync(STORAGE_KEYS.AUTH_TOKEN);
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        } catch (error) {
          console.warn('Failed to get auth token:', error);
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor to handle errors
    this.api.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      async (error) => {
        if (error.response?.status === 401) {
          // Token expired or invalid
          await this.clearAuthData();
          // You might want to redirect to login here
        }
        return Promise.reject(error);
      }
    );
  }

  private async clearAuthData() {
    try {
      await SecureStore.deleteItemAsync(STORAGE_KEYS.AUTH_TOKEN);
      await SecureStore.deleteItemAsync(STORAGE_KEYS.USER_DATA);
      await SecureStore.deleteItemAsync(STORAGE_KEYS.REFRESH_TOKEN);
    } catch (error) {
      console.warn('Failed to clear auth data:', error);
    }
  }

  // Auth methods
  async login(email: string, password: string) {
    const response = await this.api.post('/api/auth/login', { email, password });
    return response.data;
  }

  async register(userData: { name: string; email: string; phone: string; password: string }) {
    const response = await this.api.post('/api/auth/register', userData);
    return response.data;
  }

  async verifyRegistration(email: string, otp: string) {
    const response = await this.api.post('/api/auth/verify-registration', { email, otp });
    return response.data;
  }

  async forgotPassword(email: string) {
    const response = await this.api.post('/api/auth/forgot-password', { email });
    return response.data;
  }

  async resetPassword(email: string, otp: string, newPassword: string) {
    const response = await this.api.post('/api/auth/reset-password', { 
      email, 
      otp, 
      newPassword 
    });
    return response.data;
  }

  // Course methods
  async getCourses() {
    const response = await this.api.get('/api/courses');
    return response.data;
  }

  async getUserCourses(userId: number) {
    const response = await this.api.get(`/api/user-courses/${userId}`);
    return response.data;
  }

  async getCourseDetails(courseId: number) {
    const response = await this.api.get(`/api/courses/${courseId}`);
    return response.data;
  }

  async enrollInCourse(courseId: number) {
    const response = await this.api.post(`/api/courses/${courseId}/enroll`);
    return response.data;
  }

  async updateCourseProgress(courseId: number, moduleId: number, progress: number) {
    const response = await this.api.post(`/api/courses/${courseId}/progress`, {
      moduleId,
      progress
    });
    return response.data;
  }

  // Generic methods
  async get(url: string, config?: AxiosRequestConfig) {
    const response = await this.api.get(url, config);
    return response.data;
  }

  async post(url: string, data?: any, config?: AxiosRequestConfig) {
    const response = await this.api.post(url, data, config);
    return response.data;
  }

  async put(url: string, data?: any, config?: AxiosRequestConfig) {
    const response = await this.api.put(url, data, config);
    return response.data;
  }

  async delete(url: string, config?: AxiosRequestConfig) {
    const response = await this.api.delete(url, config);
    return response.data;
  }
}

export const apiService = new ApiService();
export default apiService;