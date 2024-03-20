export default function Button({ onClick, text, classname, disabled }) {
  const combineClassName = `border rounded-md p-3 cursor-pointer hover:bg-slate-500 hover:text-white transition-all ${classname}`;
  return (
    <button
      className={combineClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
