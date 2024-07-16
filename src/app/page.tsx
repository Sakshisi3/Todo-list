'use client';

import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import  '@/styles/globals.scss'

export default function HomePage() {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}