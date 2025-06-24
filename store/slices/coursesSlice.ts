import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '../../utils/api';

interface Course {
  id: number;
  title: string;
  description: string;
  thumbnail?: string;
  moduleCount?: number;
  downloadable?: boolean;
  overallProgress?: number;
  price?: number;
  duration?: string;
  level?: string;
  instructor?: string;
}

interface CoursesState {
  courses: Course[];
  userCourses: Course[];
  currentCourse: Course | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: CoursesState = {
  courses: [],
  userCourses: [],
  currentCourse: null,
  isLoading: false,
  error: null,
};

// Async thunks
export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiService.getCourses();
      return response;
    } catch (error: any) {
      const message = error.response?.data?.message || error.message || 'Failed to fetch courses';
      return rejectWithValue(message);
    }
  }
);

export const fetchUserCourses = createAsyncThunk(
  'courses/fetchUserCourses',
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await apiService.getUserCourses(userId);
      return response;
    } catch (error: any) {
      const message = error.response?.data?.message || error.message || 'Failed to fetch user courses';
      return rejectWithValue(message);
    }
  }
);

export const fetchCourseDetails = createAsyncThunk(
  'courses/fetchCourseDetails',
  async (courseId: number, { rejectWithValue }) => {
    try {
      const response = await apiService.getCourseDetails(courseId);
      return response;
    } catch (error: any) {
      const message = error.response?.data?.message || error.message || 'Failed to fetch course details';
      return rejectWithValue(message);
    }
  }
);

export const enrollInCourse = createAsyncThunk(
  'courses/enrollInCourse',
  async (courseId: number, { rejectWithValue }) => {
    try {
      const response = await apiService.enrollInCourse(courseId);
      return response;
    } catch (error: any) {
      const message = error.response?.data?.message || error.message || 'Failed to enroll in course';
      return rejectWithValue(message);
    }
  }
);

export const updateCourseProgress = createAsyncThunk(
  'courses/updateCourseProgress',
  async ({ courseId, moduleId, progress }: { courseId: number; moduleId: number; progress: number }, { rejectWithValue }) => {
    try {
      const response = await apiService.updateCourseProgress(courseId, moduleId, progress);
      return response;
    } catch (error: any) {
      const message = error.response?.data?.message || error.message || 'Failed to update progress';
      return rejectWithValue(message);
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
    setCurrentCourse: (state, action) => {
      state.currentCourse = action.payload;
    },
    clearCurrentCourse: (state) => {
      state.currentCourse = null;
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
      })
      // Fetch Course Details
      .addCase(fetchCourseDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCourseDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentCourse = action.payload;
        state.error = null;
      })
      .addCase(fetchCourseDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Enroll in Course
      .addCase(enrollInCourse.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(enrollInCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        // Add the enrolled course to user courses
        if (action.payload) {
          state.userCourses.push(action.payload);
        }
        state.error = null;
      })
      .addCase(enrollInCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Update Course Progress
      .addCase(updateCourseProgress.pending, (state) => {
        state.error = null;
      })
      .addCase(updateCourseProgress.fulfilled, (state, action) => {
        // Update progress in user courses
        const courseIndex = state.userCourses.findIndex(
          course => course.id === action.payload.courseId
        );
        if (courseIndex !== -1) {
          state.userCourses[courseIndex].overallProgress = action.payload.overallProgress;
        }
        state.error = null;
      })
      .addCase(updateCourseProgress.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { clearError, setCurrentCourse, clearCurrentCourse } = coursesSlice.actions;
export default coursesSlice.reducer;