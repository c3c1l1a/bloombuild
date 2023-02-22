import { useDispatch } from 'react-redux';
import { drop } from '../redux/reducers/blocks';

export default function Column ({ children }) {
	const dispatch = useDispatch();
  const onDragOver = (e) => {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col p-20 border-solid border-2 m-5 gap-2"
      onDragOver={(e) => onDragOver(e)}
      onDrop={() => dispatch(drop())} 
    >{children}</div>
  );
}