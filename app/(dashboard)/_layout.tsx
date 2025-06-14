import { Tabs } from "expo-router"
import { useTheme } from "../../context/ThemeContext";
import { Colors } from "../../constants/themes";

const DashboardLayout = () => {
    const { theme } = useTheme();
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: Colors[theme].navBackground,
                    paddingTop: 10,
                    height: 100,
                    borderTopWidth: 0,
                },
                tabBarActiveTintColor: Colors[theme].iconColorFocused,
                tabBarInactiveTintColor: Colors[theme].iconColor,
            }}

        >
            <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
            <Tabs.Screen name="books" options={{ title: 'Books' }} />
            <Tabs.Screen name="create" options={{ title: 'Create' }} />
        </Tabs>
    )
}

export default DashboardLayout