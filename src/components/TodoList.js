import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

// const TodoList = (props) => {

//     // const todos = props.todos;
//     const { todos } = props;
const TodoList = ({ todos }) => {

    return (
        <div className="TodoList">
            {
                todos.map((todo) => <TodoListItem todo={ todo } key={ todo.id } />)
            }
        </div>
    );

}

export default TodoList;