import { useDispatch, useSelector} from 'react-redux';
import { getAllBlocks } from '../redux/reducers/blocks';

export default function Block () {
	const dispatch = useDispatch();
	const { blocks }= useSelector(state => state);

	return (
		<div>{blocks.map((block, key) => {
			return (<div key={key}>{block.type}</div>);
		})}</div>
	);
}