import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  Image,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '@/styles/home';

const COLORS = {
  background: '#ffffff',
  primary: '#2B7A78',
  secondary: '#3AAFA9',
  textDark: '#17252A',
  textLight: '#DEF2F1',
  grey: '#b0b0b0',
};

export default function HomeScreen() {
  const router= useRouter();

  //router.push('/chat')


  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>UlizaDoc</Text>
        <Ionicons name="person-circle-outline" size={30} color={COLORS.textDark} />
      </View>

      {/* AI Assistant Avatar & Welcome */}
      <View style={styles.welcomeSection}>
        <Image
          source={require('@/assets/images/adaptive-icon.png')} // Add an AI face/avatar here
          style={styles.avatar}
        />
        <Text style={styles.welcomeText}>Hello, I'm UlizaDoc 👋</Text>
        <Text style={styles.subText}>Your personal AI health assistant</Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.card} onPress={() => router.push('/chat')}>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color={COLORS.primary} />
          <Text style={styles.cardText}>Ask a Question</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <MaterialIcons name="health-and-safety" size={24} color={COLORS.primary} />
          <Text style={styles.cardText}>Check Symptoms</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Ionicons name="bulb-outline" size={24} color={COLORS.primary} />
          <Text style={styles.cardText}>Health Tips</Text>
        </TouchableOpacity>
      </View>

      {/* Footer CTA */}
      <TouchableOpacity
        style={styles.chatButton}
        onPress={() => router.push('/chat')}
      >
        <Ionicons name="chatbubbles" size={20} color="#fff" />
        <Text style={styles.chatButtonText}>Start Chatting</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

