import { View, Text, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import Button from '../../components/Button';
import ThemedTextInput from '../../components/ThemedTextInput';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const AuthSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

type AuthSchemaType = z.infer<typeof AuthSchema>;

const Register = () => {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm<AuthSchemaType>({
        resolver: zodResolver(AuthSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = (data: AuthSchemaType) => {
        console.log("Login button pressed", data);
        try {
            setIsLoading(true);
        } catch (error) {

        } finally {
            setIsLoading(false);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className='bg-background flex-1 items-center justify-center'>
                <Text className='text-title text-lg mb-5'>Create a new account</Text>

                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <ThemedTextInput
                            className={`w-4/5 mb-5 ${errors.email ? 'border-red-500' : 'border-bg-300'}`}
                            placeholder="Enter your email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                        />
                    )}
                />
                {errors.email && <Text className="text-red-500 text-sm mt-1">{errors.email.message}</Text>}

                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <ThemedTextInput
                            className={`w-4/5 mb-5 ${errors.password ? 'border-red-500' : 'border-bg-300'}`}
                            placeholder="Enter your password"
                            secureTextEntry
                            autoCapitalize="none"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                        />
                    )}
                />
                {errors.password && <Text className="text-red-500 text-sm mt-1">{errors.password.message}</Text>}

                <Button onPress={handleSubmit(onSubmit)} disabled={isLoading} >
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