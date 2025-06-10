import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
    return (
        <View className='flex-1 items-center justify-center bg-background'>
            <Text className='font-bold text-lg text-text'>About Screen</Text>
            <Link href="/">Back Home</Link>
        </View>
    )
}

export default About
