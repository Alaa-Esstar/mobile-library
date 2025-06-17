import { Redirect, Tabs } from "expo-router"
import CustomTabBar from "../../components/CustomTabBar";
import { useUser } from "../../context/UserContext";
import { ActivityIndicator } from "react-native";
import { BooksProvider } from "../../context/BooksContext";

const DashboardLayout = () => {
    const { user, isLoading } = useUser();

    if (isLoading) return <ActivityIndicator size="large" className="flex-1 bg-background text-text" />;
    if (!user) return <Redirect href="/login" />;

    return (
        <BooksProvider>
            <Tabs
                tabBar={props => <CustomTabBar {...props} />}
                screenOptions={{ headerShown: false }}
            >
                <Tabs.Screen name="profile" options={{
                    title: 'Profile'
                }} />
                <Tabs.Screen name="books" options={{
                    title: 'Books'
                }} />
                <Tabs.Screen name="create" options={{
                    title: 'Create'
                }} />
                <Tabs.Screen name="books/[id]" options={{ href: null }} />
            </Tabs>
        </BooksProvider>
    )
}

export default DashboardLayout