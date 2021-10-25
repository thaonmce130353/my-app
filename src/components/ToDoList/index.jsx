import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoList: PropTypes.func
};

TodoList.defaultProps = {
    todos: [],
    onTodoList: null
}

function TodoList(props) {

    const { todos, onTodoList } = props;
    var elements = todos.map((todo) => (
        <li
            key={todo.id}
            onClick={() => handleClick(todo)}
        >
            {todo.title}
        </li>
    ));
    return (
        <ul className="todo-list">
            {elements}
        </ul>
    );

    function handleClick(todo) {
        if (onTodoList) {
            onTodoList(todo);
        }
    }
}

export default TodoList;