// styles/auth.styles.ts
import { COLORS } from "@/constants/theme";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    header: {
        padding: 20,
        backgroundColor: 'black',
        justifyContent: 'center', // Center vertically
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 24,
        fontFamily: "JetBrainsMono-Medium",
        color: COLORS.secondary,

    },
    messagesContainer: {
        padding: 10,
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
    messageBubble: {
        backgroundColor: COLORS.surface,
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    userBubble: {
        backgroundColor: COLORS.secondary,
        alignSelf: 'flex-end',
        borderTopRightRadius: 0,
    },
    aiBubble: {
        backgroundColor: COLORS.surface,
        alignSelf: 'flex-start',
        borderTopLeftRadius: 0,
    },
    typingDots: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },
    dot: {
        width: 6,
        height: 6,
        backgroundColor: COLORS.white,
        borderRadius: 3,
        opacity: 0.6,
    },

    messageText: {
        color: COLORS.white,
    },
    flex: {
        flex: 1,
    },
    inputBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderTopWidth: 1,
        marginBottom: 50,

    },
    input: {
        flex: 1,
        color: COLORS.white,
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: '#2C2C2C',
        borderRadius: 20,
        fontSize: 14,
        maxHeight: 100,
    },
    sendButton: {
        marginLeft: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: COLORS.secondary,
        borderRadius: 30,
    },
    sendText: {
        color: COLORS.white,
        fontWeight: 'bold',
    },
    brandSection: {
        alignItems: "center",
        marginTop: height * 0.12,
    },



    logoContainer: {
        width: 60,
        height: 60,
        borderRadius: 18,
        backgroundColor: "rgba(74, 222, 128, 0.15)",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    appName: {
        fontSize: 42,
        fontWeight: "700",
        fontFamily: "JetBrainsMono-Medium",
        color: COLORS.primary,
        letterSpacing: 0.5,
        marginBottom: 8,
    },
    tagline: {
        fontSize: 16,
        color: COLORS.grey,
        letterSpacing: 1,
        textTransform: "lowercase",
    },
    illustrationContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 40,
    },
    illustration: {
        width: width * 0.75,
        height: width * 0.75,
        maxHeight: 280,
    },
    loginSection: {
        width: "100%",
        paddingHorizontal: 24,
        paddingBottom: 40,
        alignItems: "center",
    },
    googleButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 14,
        marginBottom: 20,
        width: "100%",
        maxWidth: 300,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 5,
    },
    googleIconContainer: {
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },
    googleButtonText: {
        fontSize: 16,
        fontWeight: "600",
        color: COLORS.surface,
    },
    termsText: {
        textAlign: "center",
        fontSize: 12,
        color: COLORS.grey,
        maxWidth: 280,
    },
});