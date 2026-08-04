import Constants from 'expo-constants';
import { Platform } from 'react-native';

function resolveApiBaseUrl() {
  if (Platform.OS === 'web') {
    return 'http://localhost:8000';
  }
  const host = Constants.expoConfig?.hostUri?.split(':')[0];
  return `http://${host}:8000`;
}

export const API_BASE_URL = resolveApiBaseUrl();
