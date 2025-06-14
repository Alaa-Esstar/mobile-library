import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { Colors, themes } from '../constants/themes';
import "./global.css"
import { UserProvider } from '../context/UserContext';


export default function RootLayout() {
    return (
        <ThemeProvider>
            <UserProvider>
                <LayoutContent />
            </UserProvider>
        </ThemeProvider>
    );
}

const LayoutContent = () => {
    const { theme } = useTheme();


    return (
        <SafeAreaView style={themes[theme]} className='flex-1'>
            <Stack
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Colors[theme].navBackground,
                    },
                    headerTintColor: Colors[theme].title,
                }}
            >
                <Stack.Screen name="index" options={{ headerTitle: 'Home' }} />
                <Stack.Screen name='(auth)' options={{ headerShown: false }} />
                <Stack.Screen name='(dashboard)' options={{ headerShown: false }} />
            </Stack>
        </SafeAreaView>
    );
};
