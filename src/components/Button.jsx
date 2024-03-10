export default function Button( { onClick, text, classname } ) {
  const combineClassName = `border rounded-md p-3 cursor-pointer hover:bg-slate-500 hover:text-white transition-all ${classname}`
  return (
    <div className={combineClassName} onClick={onClick}>{text}</div>
  )
}
