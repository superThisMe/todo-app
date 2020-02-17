import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {

    const [ todoText, setTodoText ] = useState('');
    // const { onInsert } = props;

    // const submitHandler = (e) => {
    //     onInsert(todoText);
    //     setTodoText('');
    //     e.preventDefault();
    // }

    const submitHandler = useCallback(
        e => {
            onInsert(todoText);
            setTodoText('');
            e.preventDefault();
        },
        [ onInsert, todoText ]
    );

    return (
        <form 
            className="TodoInsert"  
            onSubmit={ submitHandler }>
            <input 
                placeholder="할 일을 입력하세요"
                value = { todoText }
                onChange = {useCallback( e => setTodoText(e.target.value), [setTodoText] )}/>
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );

}

export default TodoInsert;