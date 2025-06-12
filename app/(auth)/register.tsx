import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Register = () => {
    const router = useRouter();
    return (
        <View className='bg-background flex-1 items-center justify-center'>
            <Text className='text-title text-lg mb-8'>create a new account</Text>

            <Pressable onPress={() => router.push("/login")} >
                <Text className='text-text mt-5'>Login</Text>
            </Pressable>
        </View>
    )
}

export default Register