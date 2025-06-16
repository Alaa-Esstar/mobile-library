import { useState, useCallback } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { useBooks } from '../../context/BooksContext'
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ThemedTextInput from '../../components/ThemedTextInput';
import Button from '../../components/Button';

const CreateBookSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }).max(255, { message: "Title must be less than 255 characters" }),
    author: z.string().min(1, { message: "Author is required" }).max(255, { message: "Author must be less than 255 characters" }),
    description: z.string().min(1, { message: "Description is required" }).max(500, { message: "Description must be less than 500 characters" }),
})

type CreateBookSchemaType = z.infer<typeof CreateBookSchema>;

const Create = () => {
    const router = useRouter();
    const { createBook, isLoading } = useBooks()

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const { control, handleSubmit, formState: { errors }, reset } = useForm<CreateBookSchemaType>({
        resolver: zodResolver(CreateBookSchema),
        defaultValues: {
            title: '',
            author: '',
            description: ''
        }
    });

    useFocusEffect(
        useCallback(() => {
            reset({
                title: '',
                author: '',
                description: ''
            });
            setErrorMessage(null); // Clear any lingering error messages
        }, [reset])
    );

    const onSubmit = async (data: CreateBookSchemaType) => {
        setErrorMessage(null);
        try {
            await createBook(data);
            router.replace('/books');
        } catch (error: any) {
            const message = error?.message || "An error occurred. Please try again.";
            setErrorMessage(message);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className='bg-background flex-1 items-center justify-center'>
                <Text className='text-title text-lg mb-5'>Add a New Book</Text>
                <View className='w-full items-center mb-5'>
                    <Controller
                        control={control}
                        name="title"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <ThemedTextInput
                                className={`w-4/5 ${errors.title && 'border-wartext-warning'}`}
                                placeholder="Enter book title"
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                            />
                        )}
                    />
                    {errors.title && <Text className="text-warning text-sm mt-1">{errors.title.message}</Text>}
                </View>
                <View className='w-full items-center mb-5'>
                    <Controller
                        control={control}
                        name="author"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <ThemedTextInput
                                className={`w-4/5 ${errors.author && 'border-wartext-warning'}`}
                                placeholder="Enter book author"
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                            />
                        )}
                    />
                    {errors.author && <Text className="text-warning text-sm mt-1">{errors.author.message}</Text>}
                </View>
                <View className='w-full items-center mb-5'>
                    <Controller
                        control={control}
                        name="description"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <ThemedTextInput
                                className={`w-4/5 min-h-28 ${errors.description && 'border-wartext-warning'}`}
                                placeholder="Enter book description"
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                multiline={true}
                            />
                        )}
                    />
                    {errors.description && <Text className="text-warning text-sm mt-1">{errors.description.message}</Text>}
                </View>

                {errorMessage && (
                    <View className='w-4/5 mb-5 bg-warning/20 p-3 rounded-lg'>
                        <Text className="text-warning text-sm text-center font-bold">
                            {errorMessage}
                        </Text>
                    </View>
                )}

                <Button onPress={handleSubmit(onSubmit)} disabled={isLoading}>
                    <Text className="text-white text-center font-semibold text-lg">{isLoading ? 'Saving...' : 'Create Book'}</Text>
                </Button>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Create