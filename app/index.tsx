import { Button, Pressable, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { useTheme } from '../context/ThemeContext';
import Logo from '../components/Logo';

const Home = () => {
    const { toggleTheme } = useTheme();
    return (
        <View className={`flex-1 items-center justify-center bg-background`}>
            <Logo className='my-5' />
            <Text className='font-bold text-lg text-primary'>Home</Text>
            <Link href="/login" className=' text-text'>Login Page</Link>
            <Link href="/register" className='text-text'>Register Page</Link>
            <Link href="/profile" className='text-text'>Profile Page</Link>
            <Pressable onPress={toggleTheme} className='mt-5 border border-uiBackground p-1 rounded-md bg-uiBackground'>
                <Text className='text-text'>Toggle Theme</Text>
            </Pressable>
        </View>
    )
}

export default Home
