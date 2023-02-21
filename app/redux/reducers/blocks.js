import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [
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
];


const blocksSlice = createSlice({
	name: 'blocks',
	initialState,
	reducers: {
		getAllBlocks(state, action){
			console.log(state);
			return state;
		}
	},
});


export const { getAllBlocks } = blocksSlice.actions;
export default blocksSlice.reducer