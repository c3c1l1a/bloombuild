import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { drop } from '../redux/reducers/blocks';

export default function Column ({ children, block }) {
	const dispatch = useDispatch();
	const [ columnItem, setColumnItem ] = useState();

	useEffect(() => {
		setColumnItem(block);
	}, [columnItem]);
	
	const draggedItem = useSelector(state => state.draggedItem);

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDrop = (e) =>{
		dispatch(drop({draggedItem, columnItem}));
	}

  return (
    <div className="flex flex-col p-20 border-solid border-2 m-5 gap-2"
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e, block)} 
    >{children}</div>
  );
}