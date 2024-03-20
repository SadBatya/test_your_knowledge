import DeleteIcon from '@mui/icons-material/DeleteTwoTone';
import { useMatch } from 'react-router-dom'
import CheckBox from './ControlledCheckbox'


export default function Li({ text, isCorrect }) {
  
  const isEditMode = useMatch('/edit')

  return (
    <>
      {isEditMode ? (
      <div className='flex gap-2 mb-4 items-center justify-center'>
        <li className="flex flex-1  select-none border p-2 rounded-md items-center gap-3 cursor-pointer hover:bg-slate-500 hover:text-white transition-all">
          <label className="cursor-pointer" htmlFor="answer-1">{text}</label>
        </li>
          <div className='flex flex-col justify-center'>
            <CheckBox isCorrect={isCorrect}/>
            <button><DeleteIcon /></button>
          </div>
      </div>
      ) : (
        <div className='flex gap-2'>
        <li className="flex flex-1 mb-2 select-none border p-2 rounded-md items-center gap-3 cursor-pointer hover:bg-slate-500 hover:text-white transition-all">
          <input className="cursor-pointer" type="radio" id="answer-1" name="answer"/>
          <label className="cursor-pointer" htmlFor="answer-1">{text}</label>
        </li>
      </div>
      )}  
    </>
  )
}
