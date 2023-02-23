import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import blocksReducer from './reducers/blocks';
import draggedItemReducer from './reducers/draggedItem';

const rootReducer = combineReducers({
  block: blocksReducer,
  draggedItem: draggedItemReducer
});


const store = configureStore({
  reducer: rootReducer,
});

export default store;