// src/context/ThemeContext.tsx
import { createContext, useContext, useState } from 'react';

// 테마 설정
const themes = {
    light: {
        foreground: "#12161A",
        background: "#ffffff"
    },
    dark: {
        foreground: "#ffffff",
        background: "#12161A"
    }
};

// 테마 컨텍스트 생성
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// 컨텍스트를 사용하는 커스텀 훅
export function useTheme() {
    return useContext(ThemeContext);
}
