import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { ID, Models } from "react-native-appwrite"

type UserContextType = {
    user: Models.User<Models.Preferences> | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    async function login(email: string, password: string) {
        try {
            setIsLoading(true);
            await account.createEmailPasswordSession(email, password);
            const response = await account.get();
            setUser(response);
        } catch (error) {
            console.error("Login failed: ", error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    async function register(email: string, password: string) {
        setIsLoading(true);
        try {
            await account.create(ID.unique(), email, password)
            await login(email, password);
        } catch (error) {
            console.error("Registration failed: ", error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    async function logout() {
        await account.deleteSession("current");
        setUser(null);
    }

    async function getInitialUser() {
        try {
            setIsLoading(true);
            const response = await account.get();
            setUser(response);
        } catch (error) {
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        getInitialUser();
    }, [])

    return (
        <UserContext.Provider value={{ user, login, register, logout, isLoading }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}