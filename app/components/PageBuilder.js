import { useDispatch, useSelector} from 'react-redux';
import { getAllBlocks } from '../redux/reducers/blocks';

export default function PageBuilder () {
	const dispatch = useDispatch();
	const blocks = useSelector(state => state);
	console.log(blocks);

	return (
		<div>My page builder</div>
	);
}