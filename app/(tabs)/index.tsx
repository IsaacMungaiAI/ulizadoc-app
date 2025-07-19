import { Image } from 'expo-image';
import {
  Text, TextInput, KeyboardAvoidingView,
  Platform, View,
  FlatList, TouchableOpacity,
  ListRenderItem
} from 'react-native';
import { styles } from '@/styles/home';
import { useState } from 'react';
import { COLORS } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';

type Message = {
  id: string;
  text: string;
  sender?: 'user' | 'ai';
};


export default function HomeScreen() {
  const [userPrompt, setUserPrompt] = useState('');
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I am UlizaDoc, your AI health assistant.',
      sender: 'ai',
    },
    {
      id: '2',
      text: 'How can I assist you today?',
      sender: 'ai',
    },
  ]);

  const handleSend = () => {
    if (userPrompt.trim()) {
      setMessages(prev => [
        ...prev,
        { id: Date.now().toString(), text: userPrompt, sender: 'user' }
      ]);
      setUserPrompt('');
      setIsTyping(true)
      //simulate AI response
      setTimeout(() => {
        setIsTyping(false)
        setMessages(prev => [
          ...prev,
          { id: Date.now().toString(), text: "I'm thinking...", sender: 'ai' }
        ]);
      }, 1000);
    }
  };


  const renderMessageItem: ListRenderItem<Message> = ({ item }) => {
    // Determine if the message is from the user or AI
    const isUser = item.sender === 'user';
    return (
      <View style={[styles.messageBubble,
      isUser ? styles.userBubble : styles.aiBubble,
      ]}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    )
  };

  const TypingIndicator = () => (
    <View style={[styles.messageBubble, styles.aiBubble]}>
      <View style={styles.typingDots}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  );

  const mergedData: Message[] = isTyping
    ? [...messages, { id: 'typing', text: "UlizaDoc is typing...", sender: 'ai' }]
    : messages;


  return (
    <View style={styles.container}>
      {/*HEADER*/}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>UlizaDoc</Text>
      </View>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
        {/*CHAT CONTENT*/}
        <FlatList
          data={mergedData}
          renderItem={(info) =>
            info.item.id === 'typing' ? <TypingIndicator /> : renderMessageItem(info)
          }
          keyExtractor={item => item.id}
          contentContainerStyle={styles.messagesContainer}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.headerTitle}>No messages yet</Text>
          }
        />
        {/*USER INPUT*/}
        <View style={styles.inputBar}>
          <TextInput style={styles.input}
            placeholder='Ask anything...'
            placeholderTextColor={COLORS.grey}
            value={userPrompt}
            onChangeText={setUserPrompt}
            multiline />
          <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
            <Ionicons name="send" size={20} color={COLORS.background} />
          </TouchableOpacity>
        </View>


      </KeyboardAvoidingView>
    </View>

  );
}


