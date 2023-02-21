import { useDispatch, useSelector} from 'react-redux';
import { getAllBlocks } from '../redux/reducers/blocks';
import Block from './block';

export default function PageBuilder () {
	const dispatch = useDispatch();
	const { blocksData }= useSelector(state => state);

	return (<Block blocksData={blocksData} />);
}