import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { checkAuthStatus } from '../store/slices/authSlice';
import LoadingScreen from '../components/LoadingScreen';

export default function IndexScreen() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading, user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    // Check if user is already authenticated
    dispatch(checkAuthStatus() as any);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated && user) {
        router.replace('/(tabs)');
      } else {
        router.replace('/auth');
      }
    }
  }, [isAuthenticated, isLoading, user]);

  return (
    <View style={styles.container}>
      <LoadingScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});