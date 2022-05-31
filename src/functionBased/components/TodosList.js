import React from 'react';
import TodoItem from './Todoitem';

/* eslint-disable react/prop-types */

const TodosList = (props) => (
  <ul>
    {props.todos.map((todo) => (  // eslint-disable-line
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={props.handleChangeProps}  // eslint-disable-line
        deleteTodoProps={props.deleteTodoProps}  // eslint-disable-line
        setUpdate={props.setUpdate}  // eslint-disable-line
      />
    ))}
  </ul>
);

export default TodosList;
