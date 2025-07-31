import { COLORS } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        flex: 1,
    },
    content: {
        padding: 20,
        paddingBottom: 60,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: COLORS.secondary,
    },
    welcomeSection: {
        alignItems: 'center',
        marginVertical: 30,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15,
    },
    welcomeText: {
        fontSize: 22,
        fontWeight: '600',
        color: COLORS.secondary,
    },
    subText: {
        fontSize: 16,
        color: COLORS.grey,
        marginTop: 4,
    },
    actionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 16,
    },
    card: {
        backgroundColor: COLORS.surfaceLight,
        width: '100%',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 16,
    },
    cardText: {
        marginTop: 8,
        fontSize: 14,
        color: COLORS.secondary,
        fontWeight: '500',
        textAlign: 'center',
    },
    chatButton: {
        marginTop: 20,
        backgroundColor: COLORS.primary,
        padding: 16,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    chatButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});