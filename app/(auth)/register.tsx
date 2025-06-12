import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import Button from '../../components/Button';

const Register = () => {
    const router = useRouter();

    const handleSubmit = () => {
        console.log("Login button pressed");
    }
    
    return (
        <View className='bg-background flex-1 items-center justify-center'>
            <Text className='text-title text-lg mb-8'>create a new account</Text>

            <Button onPress={handleSubmit}>
                <Text className='text-text'>Register</Text>
            </Button>

            <Pressable onPress={() => router.push("/login")} >
                <Text className='text-text mt-5'>Login</Text>
            </Pressable>
        </View>
    )
}

export default Register