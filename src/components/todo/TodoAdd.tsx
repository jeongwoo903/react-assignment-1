/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { apiFetch } from "../../apis";

const TodoAdd = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddClick = async () => {
        if (inputValue.trim() === '') return;

        const newTodo = {
            id: Date.now().toString(),
            content: inputValue,
            isChecked: false
        };

        setIsSubmitting(true);

        try {
            await apiFetch('/todo', {
                method: 'POST',
                body: JSON.stringify(newTodo),
            });
            setInputValue('');
            alert('추가되었습니다!');
            onAddTodo(); // 할 일 추가 후 콜백 호출
        } catch (error) {
            console.error('Error adding todo:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div css={todoAddCss}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                disabled={isSubmitting}
                css={inputCss}
            />
            <button onClick={handleAddClick} disabled={isSubmitting} css={buttonCss}>
                Add
            </button>
        </div>
    );
};

export default TodoAdd;

const todoAddCss = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    width: 100%;
    margin-top: 20px;
`;

const inputCss = css`
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
`;

const buttonCss = css`
    padding: 8px 12px;
    font-size: 14px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:disabled {
        background-color: #6c6c6c;
        cursor: not-allowed;
    }
`;
