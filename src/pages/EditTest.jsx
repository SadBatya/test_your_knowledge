import { Question, Button } from '../components';
import { useNavigate } from 'react-router-dom'

export default function EditTest() {
  const navigate = useNavigate()
  return (
    <div className='w-6/12 flex flex-col justify-center items-center mx-auto'>
      <Question />
      <div className='flex flex-col gap-3'>
        <Button
          text={'Main Page'}
          classname={'text-center'}
          onClick={() => navigate('/')}
        />
        <Button text={'Save test'}/>
      </div>
    </div>
  );
}
