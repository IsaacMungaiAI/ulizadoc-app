import { COLORS } from '@/constants/theme';
import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from "@expo/vector-icons"


export default function TabLayout() {


  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 0,
          height: 40,
          paddingBottom: 8,
        }
      }}>
      <Tabs.Screen name='index' options={{
        tabBarIcon: ({ size, color }) => <Ionicons name='home' size={size} color={color} />
      }} />

      <Tabs.Screen name='chat' options={{
        tabBarIcon: ({ size, color }) => <Ionicons name='chatbubble-outline' size={size} color={color} />
      }} />
      <Tabs.Screen name='profile' options={{
        tabBarIcon: ({ size, color }) => <Ionicons name='person-circle' size={size} color={color} />
      }} />

    </Tabs>
  );
}
