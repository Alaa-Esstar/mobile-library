import { View, Text, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import Button from '../../components/Button';
import ThemedTextInput from '../../components/ThemedTextInput';

const Register = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log("register button pressed", email, password);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className='bg-background flex-1 items-center justify-center'>
                <Text className='text-title text-lg mb-5'>Create a new account</Text>

                <ThemedTextInput
                    placeholder='Email'
                    className='w-4/5 mb-5'
                    keyboardType='email-address'
                    onChangeText={setEmail}
                    value={email}
                />

                <ThemedTextInput
                    placeholder='Password'
                    className='w-4/5 mb-5'
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password}
                />

                <Button onPress={handleSubmit}>
                    <Text className='text-text'>Register</Text>
                </Button>

                <Text className='text-text mt-5'>Already have an account?</Text>
                <Pressable onPress={() => router.push("/login")} className='mt-5 self-center'>
                    <Text className='text-text underline'>Login</Text>
                </Pressable>
                <Pressable onPress={() => router.dismissTo("/")} className='mt-5 self-center'>
                    <Text className='text-text underline'>Home</Text>
                </Pressable>

            </View>
        </TouchableWithoutFeedback>
    )
}

export default Register