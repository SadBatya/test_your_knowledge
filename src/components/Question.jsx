import Li from './Li';
import { Button } from '@mui/material';
export default function Question({ question, variants, isCorrect }) {
  return (
    <div className='mt-10'>
      <p className='text-xl'>{question}</p>
      <ul className='mt-5 flex flex-col gap-2'>
        <Button className='flex '>+</Button>
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
