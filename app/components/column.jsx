
export default function Column ({ children }) {
  const onDragOver = (e) => {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col p-20 border-solid border-2 m-5 gap-2"
      onDragOver={(e) => onDragOver(e)} 
    >{children}</div>
  );
}