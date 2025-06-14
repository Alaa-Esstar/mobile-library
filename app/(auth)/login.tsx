import { View, Text, Pressable, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { useRouter } from 'expo-router'
import Button from '../../components/Button';
import ThemedTextInput from '../../components/ThemedTextInput';
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from 'react';
import { useUser } from '../../context/UserContext';

const AuthSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});

type AuthSchemaType = z.infer<typeof AuthSchema>;

const Login = () => {
    const router = useRouter();

    const { login, isLoading } = useUser();

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const { control, handleSubmit, formState: { errors } } = useForm<AuthSchemaType>({
        resolver: zodResolver(AuthSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = async (data: AuthSchemaType) => {
        setErrorMessage(null); // Reset error message on new submission
        try {
            await login(data.email, data.password);
        } catch (error: any) {
            const message = error?.message || "An error occurred. Please try again.";
            setErrorMessage(message);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className='bg-background flex-1 items-center justify-center'>
                <Text className='text-title text-lg mb-5'>Login to your account</Text>

                <View className='w-full items-center mb-5'>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <ThemedTextInput
                                className={`w-4/5 ${errors.email ? 'border-wartext-warning' : 'border-bg-300'}`}
                                placeholder="Enter your email"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                            />
                        )}
                    />
                    {errors.email && <Text className="text-warning text-sm mt-1">{errors.email.message}</Text>}
                </View>
                <View className='w-full items-center mb-5'>
                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <ThemedTextInput
                                className={`w-4/5 ${errors.password ? 'border-wartext-warning' : 'border-bg-300'}`}
                                placeholder="Enter your password"
                                secureTextEntry
                                autoCapitalize="none"
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                            />
                        )}
                    />
                    {errors.password && <Text className="text-warning text-sm mt-1">{errors.password.message}</Text>}
                </View>

                {errorMessage && (
                    <View className='w-4/5 mb-5 bg-warning/20 p-3 rounded-lg'>
                        <Text className="text-warning text-sm text-center font-bold">
                            {errorMessage}
                        </Text>
                    </View>
                )}

                <View className="w-4/5">
                    <Button onPress={handleSubmit(onSubmit)} disabled={isLoading}>
                        <Text className="text-white text-center font-semibold text-lg">Login</Text>
                    </Button>

                    <View className="flex-row justify-center items-center mt-6 gap-1">
                        <Text className="text-text">Don't have an account?</Text>
                        <Pressable onPress={() => router.push("/register")}>
                            <Text className="text-primary underline font-semibold">Register</Text>
                        </Pressable>
                    </View>

                    <Pressable onPress={() => router.dismissTo("/")} className="mt-6 items-center">
                        <Text className="text-text underline font-medium">Back to Home</Text>
                    </Pressable>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Login