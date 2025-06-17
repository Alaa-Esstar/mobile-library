import { View, TouchableOpacity, Text } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { Colors } from '../constants/themes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    const { theme, toggleTheme } = useTheme();
    const insets = useSafeAreaInsets();
    const visibleTabs = ['profile', 'books', 'create'];

    return (
        <View className="flex-row justify-around items-center pt-2"
            style={{
                backgroundColor: Colors[theme].navBackground,
                paddingBottom: insets.bottom,
                height: 100,
            }}>
            {state.routes.filter(route => visibleTabs.includes(route.name)).map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.title || route.name;

                const isFocused = state.index === index;
                const iconName = route.name === 'profile'
                    ? isFocused ? 'person' : 'person-outline'
                    : route.name === 'books'
                        ? isFocused ? 'book' : 'book-outline'
                        : route.name === 'create'
                            ? isFocused ? 'create' : 'create-outline'
                            : 'ellipse';

                const onPress = () => {
                    const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity key={route.key} onPress={onPress} className="items-center">
                        <Ionicons
                            name={iconName as any}
                            size={24}
                            color={isFocused ? Colors[theme].iconColorFocused : Colors[theme].iconColor}
                        />
                        <Text className={`text-xs ${isFocused ? 'text-title' : 'text-text'}`}>{label}</Text>
                    </TouchableOpacity>
                );
            })}

            {/* Theme Toggle Button */}
            <TouchableOpacity onPress={toggleTheme} className="items-center">
                <Ionicons
                    name={theme === 'dark' ? 'sunny' : 'moon'}
                    size={24}
                    color={Colors[theme].iconColor}
                />
                <Text className="text-xs text-text">Theme</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CustomTabBar;
