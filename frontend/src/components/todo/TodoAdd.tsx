/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useRef } from 'react';
import { apiFetch } from "../../apis";

const TodoAdd = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const inputDisable = useRef(null);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddClick = async () => {
        if (inputValue.trim() === '') return;

        if (inputDisable.current) {
            setIsDisabled(true);
        }

        const newTodo = {
            id: Date.now().toString(),
            content: inputValue,
            isChecked: false
        };

        try {
            await apiFetch('/todo', {
                method: 'POST',
                body: JSON.stringify(newTodo),
            });
            setInputValue('');
            alert('추가되었습니다!');
            setIsDisabled(false);

            onAddTodo();
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    // submit 한 부분을 state로 처리하면 debounce처리가 안됨. -> ref로 처리.

    return (
        <div css={todoAddCss}>
            <input
                type="text"
                value={inputValue}
                ref={inputDisable}
                onChange={handleInputChange}
                css={inputCss}
            />
            <button css={buttonCss} disabled={isDisabled} onClick={handleAddClick}>
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
