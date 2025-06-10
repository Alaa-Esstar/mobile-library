import { Button, Image, Text, View } from 'react-native'
import React from 'react'
import Logo from '../assets/img/logo_light.png';
import { Link } from 'expo-router';
import { useTheme } from '../context/ThemeContext';


const Home = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <View className={`flex-1 items-center justify-center bg-background`}>
            <Image source={Logo} className='mx-20' />
            <Text className='font-bold text-lg text-primary'>Home</Text>
            <Text className='mt-10 mb-32 text-title'>Reading list app</Text>
            <Link href="/about" className='mb-5 text-text'>About Page</Link>
            <Link href="/contact" className='text-text'>Contact Page</Link>
            <Button onPress={toggleTheme} title="Toggle Theme" />
        </View>
    )
}

export default Home
