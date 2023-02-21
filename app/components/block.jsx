import Column from './column';
import Text from './text';

export default function Block ({ blocksData, blockKey }) {
	return (
		<div>{blocksData.map((block, index) => {
			switch(block.type) {
				case 'Column':
					if (block.children){
						return (
							<Column key={index}>
								{block.children.map((childBlock, childIndex) => {
									return (<Block key={childIndex} blocksData={block.children}/>);
								})}
							</Column>
						);
					} else return <Column key={index}/>;
				case 'Text': 
					return (<Text key={index}>This is text in a column</Text>);
				default:
					return null;
			}
		})}</div>
	);
}