export default function Button( { onClick, text } ) {
  return (
    <div className="border rounded-md p-3 cursor-pointer hover:bg-slate-500 hover:text-white transition-all" onClick={onClick}>{text}</div>
  )
}
