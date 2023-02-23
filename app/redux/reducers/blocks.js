import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit'

const initialState = {
	id: 'main-1',
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

function removeItem (state, draggedItem){
	if (state.children) {
		const filteredChild = state.children.filter((child) => child.id === draggedItem.id);
		if (filteredChild.length === 0){
			state.children.map((child) => {
				return removeItem(child, draggedItem)
			});
		} else {
			const filteredChildren = state.children.filter((child) => child.id !== draggedItem.id)
			state.children = filteredChildren;
		}
	};
}

const blockSlice = createSlice({
	name: 'block',
	initialState,
	reducers: {
		drop(state, action){
			removeItem(state, action.payload.draggedItem);
			return state;
		}
	},
});


export const { drop } = blockSlice.actions;
export default blockSlice.reducer