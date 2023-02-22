import Main from './main';
import Column from './column';
import Text from './text';

export default function Block ({ block }) {
		console.log(block);
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
						<Column>
							{block.children.map((child, index) => {
								return (<Block key={index} block={child}/>);
							})}
						</Column>
					);
				} else return <Column />;
			case 'Text': 
				return (<Text>This is text in a column</Text>);
			default:
				return null;
		}
}