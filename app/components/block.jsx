import Main from './main';
import Column from './column';
import Text from './text';

export default function Block ({ block }) {
		switch(block.type) {
			case 'Main':
				if(block.children){
					return (
						<Main>
							{block.children.map((child, index) => {
								return <Block key={index} block={child} />
							})}
						</Main>
					);
				} else return <Main />
			case 'Column':
				if (block.children){
					return (
						<Column block={block}>
							{block.children.map((child, index) => {
								return (<Block key={index} block={child}/>);
							})}
						</Column>
					);
				} else return <Column block={block}/>;
			case 'Text': 
				return (<Text item={block}>This is text in a column</Text>);
			default:
				return null;
		}
}