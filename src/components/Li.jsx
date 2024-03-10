import DeleteIcon from '@mui/icons-material/DeleteTwoTone';

export default function Li({ text }) {



  return (
    <div className='flex justify-between'>
      
      <li className="flex mb-2 select-none border p-2 rounded-md items-center gap-3 cursor-pointer">
        <input className="cursor-pointer" type="radio" id="answer-1" name="answer"/>
        <label className="cursor-pointer" htmlFor="answer-1">{text}</label>
      </li>
        <DeleteIcon />
    </div>
  )
}
