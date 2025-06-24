import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DownloadsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Downloads</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Ionicons name="settings-outline" size={24} color="#6b7280" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Storage Info */}
        <View style={styles.storageCard}>
          <View style={styles.storageHeader}>
            <Ionicons name="phone-portrait" size={24} color="#8b5cf6" />
            <Text style={styles.storageTitle}>Device Storage</Text>
          </View>
          <View style={styles.storageBar}>
            <View style={[styles.storageUsed, { width: '30%' }]} />
          </View>
          <Text style={styles.storageText}>2.1 GB of 8 GB used</Text>
        </View>

        {/* Download Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Download Settings</Text>
          
          <TouchableOpacity style={styles.optionItem}>
            <View style={styles.optionLeft}>
              <Ionicons name="wifi" size={20} color="#6b7280" />
              <Text style={styles.optionText}>Download over Wi-Fi only</Text>
            </View>
            <Ionicons name="toggle" size={24} color="#8b5cf6" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem}>
            <View style={styles.optionLeft}>
              <Ionicons name="videocam" size={20} color="#6b7280" />
              <Text style={styles.optionText}>Video Quality</Text>
            </View>
            <View style={styles.optionRight}>
              <Text style={styles.optionValue}>720p</Text>
              <Ionicons name="chevron-forward" size={16} color="#d1d5db" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem}>
            <View style={styles.optionLeft}>
              <Ionicons name="folder" size={20} color="#6b7280" />
              <Text style={styles.optionText}>Download Location</Text>
            </View>
            <View style={styles.optionRight}>
              <Text style={styles.optionValue}>Internal Storage</Text>
              <Ionicons name="chevron-forward" size={16} color="#d1d5db" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Empty State */}
        <View style={styles.emptyState}>
          <Ionicons name="download-outline" size={80} color="#d1d5db" />
          <Text style={styles.emptyStateTitle}>No Downloads Yet</Text>
          <Text style={styles.emptyStateText}>
            Download courses to watch offline. Downloaded content will appear here.
          </Text>
          <TouchableOpacity style={styles.browseButton}>
            <Text style={styles.browseButtonText}>Browse Courses</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#1f2937',
  },
  settingsButton: {
    padding: 8,
  },
  content: {
    flex: 1,
  },
  storageCard: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  storageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  storageTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
    marginLeft: 12,
  },
  storageBar: {
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    marginBottom: 8,
  },
  storageUsed: {
    height: '100%',
    backgroundColor: '#8b5cf6',
    borderRadius: 4,
  },
  storageText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
  },
  section: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f9fafb',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#1f2937',
    marginLeft: 12,
  },
  optionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionValue: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#6b7280',
    marginRight: 8,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1f2937',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  browseButton: {
    backgroundColor: '#8b5cf6',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  browseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
});