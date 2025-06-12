import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import Button from '../../components/Button';

const Login = () => {
    const router = useRouter();

    const handleSubmit = () => {
        console.log("Login button pressed");
    }

    return (
        <View className='bg-background flex-1 items-center justify-center'>
            <Text className='text-title text-lg mb-8'>Login to your account</Text>

            <Button onPress={handleSubmit}>
                <Text className='text-text'>Login</Text>
            </Button>

            <Pressable onPress={() => router.push("/register")} className='mt-5 self-center'>
                <Text className='text-text'>Register</Text>
            </Pressable>
        </View>
    )
}

export default Login