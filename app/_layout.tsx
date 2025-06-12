// app/_layout.tsx
import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { Colors, themes } from '../constants/themes';
import "./global.css"


export default function RootLayout() {
    return (
        <ThemeProvider>
            <LayoutContent />
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
                <Stack.Screen name='(auth)' options={{ headerShown: false }} />
                <Stack.Screen name="index" options={{ headerTitle: 'Home' }} />
            </Stack>
        </SafeAreaView>
    );
};
