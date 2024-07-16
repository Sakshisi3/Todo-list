'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, updateTodo } from '../redux/actions';
import styles from '../styles/TodoApp.module.scss';

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleUpdate = () => {
    if (editedTitle.trim()) {
      dispatch(updateTodo(todo.id, editedTitle));
      setIsEditing(false);
    }
  };

  return (
    <div className={styles.todoItem}>
      {isEditing ? (
        <div className={styles.editTodo}>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className={styles.editInput}
          />
          <button onClick={handleUpdate} className={styles.editButton}>
            Save
          </button>
        </div>
      ) : (
        <div className={styles.todoContent}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggle}
            className={styles.todoCheckbox}
          />
          <span
            className={`${styles.todoTitle} ${
              todo.completed ? styles.completed : ''
            }`}
          >
            {todo.title}
          </span>
          <button onClick={() => setIsEditing(true)} className={styles.editButton}>
            Edit
          </button>
          <button onClick={handleDelete} className={styles.deleteButton}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;