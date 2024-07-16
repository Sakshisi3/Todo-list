'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import styles from '../styles/TodoApp.module.scss';

const TodoList = () => {
  const {todos} = useSelector((state) => state.todos);

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;