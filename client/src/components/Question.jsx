import Li from './Li';
import { Button } from '@mui/material';
import { useMatch } from 'react-router-dom';

export default function Question({ question, variants, isCorrect }) {
  // const useMatch = useMatch('/edit');

  return (
    <div className='mt-10'>
      <p className='text-xl'>{question}</p>
      <ul className='mt-5 flex flex-col gap-2'>
        {variants &&
          variants.map((value) => (
            <Li
              key={value.id}
              text={value.text}
              isCorrect={value.isCorrect}
            />
          ))}
      </ul>
    </div>
  );
}
