import React from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import { useBooks } from '../../context/BooksContext'
import SafeView from '../../components/SafeView'
import Card from '../../components/Card'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

const Books = () => {
    const { books } = useBooks()
    const insets = useSafeAreaInsets();
    const router = useRouter()
    return (
        <SafeView>
            <View className='mt-5'>
                <Text className='text-title text-2xl font-bold mb-5 text-center'>Your Reading List</Text>
                <FlatList data={books} keyExtractor={(item) => item.$id}
                    contentContainerStyle={{ marginTop: 40, paddingBottom: insets.bottom + 20 }}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => router.push(`/books/${item.$id}`)}>
                            <Card className='border-l-4 border-l-primary'>
                                <Text className='text-title text-xl font-bold mb-3'>{item.title}</Text>
                                <Text className='text-text'>Written by {item.author}</Text>
                            </Card>
                        </Pressable>
                    )} />
            </View>
        </SafeView>
    )
}

export default Books