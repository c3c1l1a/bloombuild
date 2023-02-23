import { useDispatch } from 'react-redux';
import { setDraggedItem } from '../redux/reducers/draggedItem';


export default function Text({ item }) {
	const dispatch = useDispatch();

	const handleDragStart = (e) =>{
		e.preventDefault()
		dispatch(setDraggedItem());
	}
	return (
		<p className="p-5 bg-red-200 rounded"
			draggable
			onDragStart={(e) => handleDragStart(e)}
		>This is a text block</p>
	);
}