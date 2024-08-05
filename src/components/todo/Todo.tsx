/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { apiFetch } from "../../apis";

interface TodoProps {
    id: number;
    checked: boolean;
    text: string;
}

const Todo = ({ id, text, checked }: TodoProps) => {
    const [isChecked, setIsChecked] = useState(checked);

    const checkedHandler = () => {
        setIsChecked(!isChecked)
    }

    useEffect(() => {
        const updateTodoData = async () => {
            try {
                const data = await apiFetch(`/todo/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify({isChecked: checked}),
                });
                console.log(data);
            } catch (error) {
                console.error('Error updating data:', error);
            }
        };

        updateTodoData();
    }, [isChecked]);

    return (
        <div css={todoCss}>
            <input type="checkbox" checked={isChecked} onChange={checkedHandler} />
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