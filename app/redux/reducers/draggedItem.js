import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {}

const draggedItemSlice = createSlice({
	name: 'draggedItem',
	initialState,
	reducers: {
		setDraggedItem(state, action){
			console.log(state, action)
			return state;
		}
	},
});


export const { setDraggedItem } = draggedItemSlice.actions;
export default draggedItemSlice.reducer