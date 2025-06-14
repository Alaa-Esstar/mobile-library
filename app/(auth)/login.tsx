import { View, Text, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import Button from '../../components/Button';
import ThemedTextInput from '../../components/ThemedTextInput';

const Login = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log("Login button pressed", email, password);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className='bg-background flex-1 items-center justify-center'>
                <Text className='text-title text-lg mb-8'>Login to your account</Text>

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
                    <Text className='text-white'>Login</Text>
                </Button>

                <Text className='text-text mt-5'>Don't have an account?</Text>

                <Pressable onPress={() => router.push("/register")} className='mt-5 self-center'>
                    <Text className='text-text underline'>Register</Text>
                </Pressable>

                <Pressable onPress={() => router.dismissTo("/")} className='mt-5 self-center'>
                    <Text className='text-text underline'>Home</Text>
                </Pressable>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Login