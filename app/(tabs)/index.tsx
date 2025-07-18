import { Image } from 'expo-image';
import { Text, TextInput, KeyboardAvoidingView, Platform, View } from 'react-native';
import { styles } from '@/styles/home';
import { useState } from 'react';
import { COLORS } from '@/constants/theme';


export default function HomeScreen() {
  const [userPrompt, setUserPrompt] = useState('');
  return (
    <View style={styles.container}>
      {/*HEADER*/}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>UlizaDoc</Text>
      </View>
      <View style={styles.homeContent}>
        <Text style={styles.chatText}>Ask Doctor</Text>
        <View style={styles.userInput}>
        <TextInput style={styles.input}
          placeholder='Ask anything...'
          placeholderTextColor={COLORS.grey}
          value={userPrompt}
          onChangeText={setUserPrompt}
          multiline />
      </View>
      </View>
      
    </View>

  );
}


