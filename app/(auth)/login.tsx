import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '@/styles/auth'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants/theme'
import { useSSO } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'


export default function login() {

    const { startSSOFlow } = useSSO();
    const router = useRouter();

    const handleGoogleSignin = async () => {
        try {
            const { createdSessionId, setActive } = await startSSOFlow({ strategy: "oauth_google" })

            if (setActive && createdSessionId) {
                setActive({ session: createdSessionId })
                router.replace("/(tabs)");
            }
        } catch (error) {
            console.error("OAuth errors: ", error);
        }
    }

    return (
        <View style={styles.container}>
            {/*BRAND SECTION*/}
            <View style={styles.brandSection}>
                <View style={styles.logoContainer}>
                    <Ionicons name="leaf" size={32} color={COLORS.primary}></Ionicons>
                </View>
                <Text style={styles.appName}>spotlight</Text>
                <Text style={styles.tagline}>don't miss anything</Text>
            </View>

            {/*ILLUSTRATION*/}
            <View style={styles.illustrationContainer}>
                <Image
                    source={require("@/assets/images/auth-bg-1.png")}
                    style={styles.illustration}
                    resizeMode="cover" />
            </View>

            {/*LOGIN SECTION*/}
            <View style={styles.loginSection}>
                <TouchableOpacity
                    style={styles.googleButton}
                    onPress={handleGoogleSignin}
                    activeOpacity={0.9}>
                    <View style={styles.googleIconContainer}>
                        <Ionicons name='logo-google' size={20} color={COLORS.surface} />
                    </View>
                    <Text style={styles.googleButtonText}>Continue with Google</Text>
                </TouchableOpacity>
                <Text style={styles.termsText}>
                    By continuing, you agree to our Terms and Privacy Policy
                </Text>
            </View>
        </View>
    );
}