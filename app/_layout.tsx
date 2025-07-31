// RootLayout.tsx
import React, { useCallback, useEffect } from 'react';
import { Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import * as NavigationBar from 'expo-navigation-bar';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router';
import {ClerkProvider} from '@clerk/clerk-expo'

// Keep splash visible while we load fonts.
void SplashScreen.preventAutoHideAsync(); // ignore returned promise on purpose; can also await in an async IIFE

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'JetBrainsMono-Medium': require('../assets/fonts/JetBrainsMono-Medium.ttf'),
  });

  // Configure Android nav bar (guard for edge-to-edge issue)
  useEffect(() => {
    if (Platform.OS === 'android') {
      // setButtonStyleAsync is safe; background color may warn in edge-to-edge
      NavigationBar.setButtonStyleAsync('light').catch(() => { });
      NavigationBar.setBackgroundColorAsync('#000000').catch(() => { });
    }
  }, []);

  // Hide splash when fonts are ready and layout has occurred
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Avoid rendering UI until fonts are loaded (prevents flash of unstyled text)
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ClerkProvider>

    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#000',
        }}
        onLayout={onLayoutRootView}
      >
        <Slot />
      </SafeAreaView>

      {/* Expo StatusBar auto-manages iOS/Android differences */}
      <StatusBar style="light" backgroundColor="#000" translucent={false} />
    </SafeAreaProvider>
    </ClerkProvider>
  );
}
