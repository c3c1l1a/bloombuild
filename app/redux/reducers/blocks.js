import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	type: 'Main',
	children: [
		{ 
			type: 'Column',
			children: [
				{ type: 'Text'},
				{ type: 'Text'},
				{ type: 'Text'},
			]
		},
		{ 
			type: 'Column',
		}
	]
}

const blockSlice = createSlice({
	name: 'block',
	initialState,
	reducers: {
		getBlock(state, action){
			console.log(state);
			return state;
		}
	},
});


export const { getBlock } = blockSlice.actions;
export default blockSlice.reducer