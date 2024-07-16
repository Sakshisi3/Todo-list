

import { configureStore,combineReducers } from '@reduxjs/toolkit'
// import { combineReducers } from 'redux'
import todosReducer from './reducers';

const rootReducer = combineReducers({
  todos: todosReducer
});

const store = configureStore({reducer:rootReducer});

export default store;