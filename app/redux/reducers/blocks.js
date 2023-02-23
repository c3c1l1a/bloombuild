import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	type: 'Main',
	children: [
		{ 
			id: 'col-1',
			type: 'Column',
			children: [
				{ 
					id: 'text-1',
					type: 'Text'
				},
				{ 
					id: 'text-2',
					type: 'Text'
				},
			]
		},
		{ 
			id: 'col-2',
			type: 'Column',
		}
	]
}

const blockSlice = createSlice({
	name: 'block',
	initialState,
	reducers: {
		drop(state, action){
			console.log(action.payload);
			return state;
		}
	},
});


export const { drop } = blockSlice.actions;
export default blockSlice.reducer