import { useDispatch, useSelector} from 'react-redux';
import { getAllBlocks } from '../redux/reducers/blocks';
import Column from './column';

export default function Block () {
	const dispatch = useDispatch();
	const { blocks }= useSelector(state => state);

	return (
		<div>{blocks.map((block, key) => {
			console.log(block.type);
			switch(block.type) {
				case 'Column':
					if (block.children){
						return (
							<Column key={key}>{block.children.map((childBlock, childKey) => {
								return (<div key={childKey}>child</div>);
							})}
							</Column>
						);
					} else return null;
					
				default:
					return null;
			}
		})}</div>
	);
}