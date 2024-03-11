import DeleteIcon from '@mui/icons-material/DeleteTwoTone';
import { useMatch } from 'react-router-dom'
import CheckBox from './ControlledCheckbox'


export default function Li({ text }) {

  const isEditMode = useMatch('/edit')

  return (
    <>
      {isEditMode ? (
      <div className='flex gap-2 mb-4 items-center justify-center'>
        <li className="flex flex-1  select-none border p-2 rounded-md items-center gap-3 cursor-pointer">
          <label className="cursor-pointer" htmlFor="answer-1">{text}</label>
        </li>
          <div className='flex flex-col justify-center'>
            <CheckBox />
            <button><DeleteIcon /></button>
          </div>
      </div>
      ) : (
        <div className='flex gap-2'>
        <li className="flex flex-1 mb-2 select-none border p-2 rounded-md items-center gap-3 cursor-pointer">
          <input className="cursor-pointer" type="radio" id="answer-1" name="answer"/>
          <label className="cursor-pointer" htmlFor="answer-1">{text}</label>
        </li>
      </div>
      )}  
    </>
  )
}
