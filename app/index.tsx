import { Pressable, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { useTheme } from '../context/ThemeContext';
import Logo from '../components/Logo';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/themes';

const Home = () => {
    const { toggleTheme, theme } = useTheme();
    return (
        <View className={`flex-1 items-center justify-center bg-background`}>
            <Logo />
            <Text className='font-bold text-2xl text-title'>The Number 1</Text>
            <Text className='text-text mb-8'>Reading List App</Text>
            <View className='flex-col gap-4 items-center'>
                <Link href="/login" className='text-text'>Login Page</Link>
                <Link href="/register" className='text-text'>Register Page</Link>
                <Link href="/profile" className='text-text'>Profile Page</Link>
                <Pressable onPress={toggleTheme} className="items-center">
                    <Ionicons
                        name={theme === 'dark' ? 'sunny' : 'moon'}
                        size={24}
                        color={Colors[theme].iconColor}
                    />
                    <Text className="text-xs text-text">Theme</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Home
