import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import blocksReducer from './reducers/blocks';

const rootReducer = combineReducers({
  block: blocksReducer,
});


const store = configureStore({
  reducer: rootReducer,
});

export default store;