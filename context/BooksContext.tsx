import { createContext, useContext, useEffect, useState } from 'react';
import { ID, Models, Permission, Query, Role } from 'react-native-appwrite';
import { databaseId, booksCollectionId, databases, client } from '../lib/appwrite';
import { useUser } from './UserContext';

type Book = Models.Document & {
    id: string;
    title: string;
    author: string;
    userid: string;
}

type BooksContextType = {
    books: Book[];
    fetchBooks: () => Promise<void>;
    fetchBook: (id: string) => Promise<Book | null>;
    createBook: (data: Omit<Book, 'id' | 'userid'>) => Promise<void>;
    deleteBook: (id: string) => Promise<void>;
    isLoading: boolean;
};


export const BooksContext = createContext<BooksContextType | undefined>(undefined);

export const BooksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [books, setBooks] = useState<Book[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { user } = useUser();

    async function fetchBooks(): Promise<void> {
        setIsLoading(true);
        try {
            const response = await databases.listDocuments(databaseId, booksCollectionId, [
                Query.equal('userid', user!.$id),
            ]);

            setBooks(response.documents as Book[]);
        } catch (error) {
            console.error("Failed to fetch books: ", error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    async function fetchBook(id: string): Promise<Book | null> {
        try {

        } catch (error) {
            console.error("Failed to fetch book: ", error);
            throw error;
        }
    }

    async function createBook(data: Omit<Book, 'id' | 'userid'>): Promise<void> {
        setIsLoading(true);
        try {
            const newBook = await databases.createDocument(
                databaseId,
                booksCollectionId,
                ID.unique(),
                { ...data, userid: user!.$id },
                [
                    Permission.read(Role.user(user!.$id)),
                    Permission.update(Role.user(user!.$id)),
                    Permission.delete(Role.user(user!.$id))
                ]
            )
        } catch (error) {
            console.error("Failed to create book: ", error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    async function deleteBook(id: string): Promise<void> {
        try {

        } catch (error) {
            console.error("Failed to delete book: ", error);
            throw error;
        }
    }

    useEffect(() => {
        let unsubscribe: (() => void) | undefined;
        const chanel = `databases.${databaseId}.collections.${booksCollectionId}.documents`;

        if (user) {
            fetchBooks();
            unsubscribe = client.subscribe(chanel, (response) => {
                const { payload, events } = response;
                if (events[0].includes("create")) {
                    setBooks((prev) => [...prev, payload as Book])
                }
            })

        } else setBooks([]);

        return () => {
            if (unsubscribe) unsubscribe()
        }
    }, [user]);

    return (
        <BooksContext.Provider value={{ books, fetchBooks, fetchBook, createBook, deleteBook, isLoading }}>
            {children}
        </BooksContext.Provider>
    )
}

export const useBooks = () => {
    const context = useContext(BooksContext);
    if (context === undefined) {
        throw new Error("useBooks must be used within a BooksProvider");
    }
    return context;
}