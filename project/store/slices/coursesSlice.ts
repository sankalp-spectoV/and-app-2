import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from '../../utils/constants';

interface Course {
  id: number;
  title: string;
  description: string;
  thumbnail?: string;
  moduleCount?: number;
  downloadable?: boolean;
  overallProgress?: number;
}

interface CoursesState {
  courses: Course[];
  userCourses: Course[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CoursesState = {
  courses: [],
  userCourses: [],
  isLoading: false,
  error: null,
};

// Async thunks
export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/courses`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch courses');
    }
  }
);

export const fetchUserCourses = createAsyncThunk(
  'courses/fetchUserCourses',
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/user-courses/${userId}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch user courses');
    }
  }
);

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Courses
      .addCase(fetchCourses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = action.payload;
        state.error = null;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Fetch User Courses
      .addCase(fetchUserCourses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userCourses = action.payload;
        state.error = null;
      })
      .addCase(fetchUserCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = coursesSlice.actions;
export default coursesSlice.reducer;