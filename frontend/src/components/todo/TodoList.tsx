/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Todo from './Todo';

interface TodoDataProps {
    id: number;
    isChecked: boolean;
    content: string;
}

const TodoList = ({ todos }) => {
    return (
        <div css={todoListCss}>
            {todos.map((todo: TodoDataProps) => (
                <Todo key={todo.id} id={todo.id} text={todo.content} checked={todo.isChecked} />
            ))}
        </div>
    );
};

export default TodoList;

const todoListCss = css`
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%;
    margin-top: 20px;
`;
