import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme as useNativeColorScheme } from 'nativewind';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => { },
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');
    const { setColorScheme } = useNativeColorScheme();

    useEffect(() => {
        // Load theme from storage on mount
        AsyncStorage.getItem('theme').then((savedTheme) => {
            if (savedTheme === 'dark' || savedTheme === 'light') {
                setTheme(savedTheme);
                setColorScheme(savedTheme);  // <- Sync NativeWind theme
            }
        });
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setColorScheme(newTheme); // <- Sync NativeWind theme
        AsyncStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
