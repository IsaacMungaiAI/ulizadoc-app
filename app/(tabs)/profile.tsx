import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '@/styles/profile';

const COLORS = {
  primary: '#2B7A78',
  secondary: '#3AAFA9',
  textDark: '#17252A',
  textLight: '#DEF2F1',
  background: '#FFFFFF',
  grey: '#A9A9A9',
  red: '#FF6B6B',
};

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
        <Ionicons name="settings-outline" size={24} color={COLORS.grey} />
      </View>

      {/* User Info */}
      <View style={styles.profileSection}>
        <Image
          source={require('@/assets/images/user-profile.png')} // You can change this to dynamic image
          style={styles.avatar}
        />
        <Text style={styles.name}>Isaac Mungai</Text>
        <Text style={styles.email}>isaac.mungai@ulizadoc.ai</Text>
      </View>

      {/* Account Options */}
      <View style={styles.options}>
        <ProfileItem icon="heart-outline" label="My Health Activity" />
        <ProfileItem icon="lock-closed-outline" label="Privacy Settings" />
        <ProfileItem icon="notifications-outline" label="Notifications" />
        <ProfileItem icon="help-circle-outline" label="Help & Support" />
        <ProfileItem icon="document-text-outline" label="Terms & Conditions" />
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutBtn} onPress={() => router.replace('/login')}>
        <Ionicons name="log-out-outline" size={20} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function ProfileItem({ icon, label }: { icon: any; label: string }) {
  return (
    <TouchableOpacity style={styles.profileItem}>
      <Ionicons name={icon} size={20} color={COLORS.primary} />
      <Text style={styles.profileItemText}>{label}</Text>
      <Feather name="chevron-right" size={20} color={COLORS.grey} />
    </TouchableOpacity>
  );
}