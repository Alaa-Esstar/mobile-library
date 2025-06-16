import { Redirect, Tabs } from "expo-router"
import CustomTabBar from "../../components/CustomTabBar";
import { useUser } from "../../context/UserContext";
import { ActivityIndicator } from "react-native";

const DashboardLayout = () => {
    const { user, isLoading } = useUser();

    if (isLoading) return <ActivityIndicator size="large" className="flex-1 bg-background text-title" />;
    if (!user) return <Redirect href="/login" />;

    return (
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
        </Tabs>
    )
}

export default DashboardLayout