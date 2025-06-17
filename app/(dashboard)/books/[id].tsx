import { useEffect, useState } from 'react'
import { Text, ActivityIndicator } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import SafeView from '../../../components/SafeView'
import { Book, useBooks } from '../../../context/BooksContext'
import Card from '../../../components/Card'
import Button from '../../../components/Button'
import { Colors } from '../../../constants/themes'

const BookDetails = () => {
    const { id } = useLocalSearchParams()
    const { fetchBook, deleteBook } = useBooks();
    const [book, setBook] = useState<Book | null>(null)
    const router = useRouter()

    const handleDelete = async () => {
        await deleteBook(id as string)
        setBook(null)
        router.replace("books")
    }

    useEffect(() => {
        async function loadBook() {
            const bookData = await fetchBook(id as string);
            setBook(bookData);
        }
        loadBook()
    }, [id])

    if (!book) return <ActivityIndicator size="large" className="flex-1 bg-background text-text" />

    return (
        <SafeView>
            <Card className='mt-5'>
                <Text className='text-title text-xl my-3'>{book.title}</Text>
                <Text className='text-text'>Written by {book.author}</Text>
                <Text className='text-title mt-5'>{book.description}</Text>
            </Card>
            <Button style={{
                marginTop: 40,
                backgroundColor: Colors.warning,
                width: 200,
                alignSelf: "center"
            }}
                onPress={handleDelete}
            >
                <Text className='text-white text-center'>Delete Book</Text>
            </Button>
        </SafeView>
    )
}

export default BookDetails