'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import styles from '../styles/TodoApp.module.scss';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTodo(title));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.todoForm}>
      <input
        type="text"
        placeholder="Enter a new todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.todoInput}
      />
      <button type="submit" className={styles.todoButton}>Add</button>
    </form>
  );
};

export default TodoForm;