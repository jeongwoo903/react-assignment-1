/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PageTitle from "./components/todo/PageTitle";
import TodoList from "./components/todo/TodoList";
import TodoAdd from "./components/todo/TodoAdd";
import { useState, useEffect } from 'react';
import { apiFetch } from "./apis";
import { ThemeProvider, useTheme } from './context/ThemeContext.tsx';

function App() {
    return (
        <ThemeProvider>
            <Content />
        </ThemeProvider>
    );
}

function Content() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            const data = await apiFetch('/todo');
            setTodos(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const { theme, toggleTheme } = useTheme();

    const mainCss = css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: ${theme.background};
        color: ${theme.foreground};
  `;

    const wrapperCss = css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid;
        border-radius: 6px;
        padding: 20px;
        background-color: ${theme.background};
        color: ${theme.foreground};
  `;

    const themeButtonCss = css`
        padding: 8px 12px;
        font-size: 14px;
        margin-top: 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        width: 100%;
        color: #fff;
        background-color: #6c6c6c;
    `

    return (
        <>
            <main css={mainCss}>
                <section css={wrapperCss}>
                    <PageTitle title={"Todo"} />
                    <TodoList todos={todos} />
                    <TodoAdd onAddTodo={fetchTodos} />
                    <button css={themeButtonCss} onClick={toggleTheme}>Toggle Theme</button>
                </section>
            </main>
        </>
    );
}

export default App;
