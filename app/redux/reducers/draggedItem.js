import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {}

const draggedItemSlice = createSlice({
	name: 'draggedItem',
	initialState,
	reducers: {
		setDraggedItem(state, action){
			return action.payload;
		}
	},
});


export const { setDraggedItem } = draggedItemSlice.actions;
export default draggedItemSlice.reducer