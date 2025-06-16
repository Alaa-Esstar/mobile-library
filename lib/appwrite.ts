import { Account, Avatars, Client, Databases } from 'react-native-appwrite';


export const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID ?? "")   // Your Project ID
    .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM ?? "");   // Your package name / bundle identifier

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
export const databaseId = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID ?? ""; // Your Database ID
export const booksCollectionId = process.env.EXPO_PUBLIC_APPWRITE_BOOKS_COLLECTION_ID ?? ""; // Your Books Collection ID