import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'

const Login = () => {
    const router = useRouter();
    return (
        <View className='bg-background flex-1 items-center justify-center'>
            <Text className='text-title text-lg mb-8'>Login to your account</Text>

            <Pressable onPress={() => router.push("/register")}>
                <Text className='text-text'>Register</Text>
            </Pressable>
        </View>
    )
}

export default Login