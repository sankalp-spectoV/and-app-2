import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo and Title */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Ionicons name="school" size={80} color="#8b5cf6" />
          </View>
          <Text style={styles.title}>Sankalp Learning</Text>
          <Text style={styles.subtitle}>
            Transform your future with expert-led courses
          </Text>
        </View>

        {/* Features */}
        <View style={styles.features}>
          <View style={styles.feature}>
            <Ionicons name="play-circle" size={24} color="#8b5cf6" />
            <Text style={styles.featureText}>HD Video Lessons</Text>
          </View>
          <View style={styles.feature}>
            <Ionicons name="download" size={24} color="#8b5cf6" />
            <Text style={styles.featureText}>Offline Access</Text>
          </View>
          <View style={styles.feature}>
            <Ionicons name="certificate" size={24} color="#8b5cf6" />
            <Text style={styles.featureText}>Certificates</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push('/auth/login')}
          >
            <Text style={styles.primaryButtonText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.push('/auth/register')}
          >
            <Text style={styles.secondaryButtonText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: height * 0.1,
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 40,
  },
  feature: {
    alignItems: 'center',
  },
  featureText: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#6b7280',
    textAlign: 'center',
  },
  actions: {
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: '#8b5cf6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
  secondaryButton: {
    backgroundColor: '#f3f4f6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  secondaryButtonText: {
    color: '#1f2937',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
});