import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import AppNavigator from './navigation';

// Disable console in production early
import './setup/disableConsole';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <AppNavigator />
    </SafeAreaView>
  );
}
