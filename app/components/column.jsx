import { useDispatch, useSelector } from 'react-redux';
import { drop } from '../redux/reducers/blocks';

export default function Column ({ children }) {
	const dispatch = useDispatch();
	const draggedItem = useSelector(state => state.draggedItem);
  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDrop = (e) =>{
		dispatch(drop(draggedItem));
	}

  return (
    <div className="flex flex-col p-20 border-solid border-2 m-5 gap-2"
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e)} 
    >{children}</div>
  );
}