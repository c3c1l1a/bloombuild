import { useDispatch, useSelector} from 'react-redux';
//import { getBlock } from '../redux/reducers/blocks';
import Block from './block';

export default function PageBuilder () {
	const dispatch = useDispatch();
	const { block }= useSelector(state => state);

	return (<Block block={block} />);
}