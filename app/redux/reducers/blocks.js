import { createSlice } from '@reduxjs/toolkit';

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
			children: [
				{ 
					id: 'text-3',
					type: 'Text'
				},
			]
		}
	]
}

function removeAtPrevPosition (state, draggedItem){
	if (state.children) {
		const filteredChild = state.children.filter((child) => child.id === draggedItem.id);
		if (filteredChild.length === 0){
			state.children.map((child) => {
				return removeAtPrevPosition(child, draggedItem)
			});
		} else {
			const filteredChildren = state.children.filter((child) => child.id !== draggedItem.id)
			state.children = filteredChildren;
		}
	};
}

function addAtNewPosition(state, draggedItem, newParent){
	if (state.id === newParent.id )
		return state.children.push(draggedItem);
	else {
		if (state.children){
			state.children.map((item) => {
				return addAtNewPosition(item, draggedItem, newParent);
			});
		}
	}
}



const blockSlice = createSlice({
	name: 'block',
	initialState,
	reducers: {
		drop(state, action){
			removeAtPrevPosition(state, action.payload.draggedItem);
			addAtNewPosition(state, action.payload.draggedItem, action.payload.parent);
			return state;
		}
	},
});


export const { drop } = blockSlice.actions;
export default blockSlice.reducer