/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {useState, useEffect, useCallback} from 'react';
import { apiFetch } from "../../apis";

interface TodoProps {
    id: number;
    checked: boolean;
    text: string;
}

const Todo = ({ id, text, checked }: TodoProps) => {
    const [isChecked, setIsChecked] = useState(checked);

    const updateTodoData = async () => {
        setIsChecked(!isChecked);

        try {
            const data = await apiFetch(`/todo/${id}`, {
                method: 'PUT',
                body: JSON.stringify({isChecked: !isChecked}),
            });
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    const todoCallback = useCallback(updateTodoData, [isChecked]);

    return (
        <div css={todoCss}>
            <input type="checkbox" checked={isChecked} onChange={todoCallback} />
            <div css={todoTextCss(isChecked)}>{text}</div>
        </div>
    );
};

export default Todo;

const todoCss = css`
    display: flex;
    justify-content: space-between;
    border: 1px solid;
    border-radius: 6px;
    padding: 12px;
`;

const todoTextCss = (isChecked: boolean) => css`
    font-size: 14px;
    max-width: 360px;
    word-wrap: break-word;
    text-align: right;
    text-decoration: ${isChecked ? 'line-through' : 'none'};
`;