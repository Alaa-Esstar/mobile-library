import { Tabs } from "expo-router"
import { useTheme } from "../../context/ThemeContext";
import { Colors } from "../../constants/themes";
import { Ionicons } from "@expo/vector-icons";

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
            <Tabs.Screen name="profile" options={{
                title: 'Profile', tabBarIcon: ({ focused }) => (
                    <Ionicons
                        size={24}
                        name={focused ? "person" : "person-outline"}
                        color={focused ? Colors[theme].iconColorFocused : Colors[theme].iconColor}
                    />
                )
            }} />
            <Tabs.Screen name="books" options={{
                title: 'Books', tabBarIcon: ({ focused }) => (
                    <Ionicons
                        size={24}
                        name={focused ? "book" : "book-outline"}
                        color={focused ? Colors[theme].iconColorFocused : Colors[theme].iconColor}
                    />
                )
            }} />
            <Tabs.Screen name="create" options={{
                title: 'Create', tabBarIcon: ({ focused }) => (
                    <Ionicons
                        size={24}
                        name={focused ? "create" : "create-outline"}
                        color={focused ? Colors[theme].iconColorFocused : Colors[theme].iconColor}
                    />
                )
            }} />
        </Tabs>
    )
}

export default DashboardLayout