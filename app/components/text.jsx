export default function Text({ item }) {
	const handleDragStart = (e) =>{
		e.preventDefault()
		console.log(item)
	}
	return (
		<p className="p-5 bg-red-200 rounded"
			draggable
			onDragStart={(e) => handleDragStart(e)}
		>This is a text block</p>
	);
}