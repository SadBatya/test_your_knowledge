import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function ControlledCheckbox({ isCorrect }) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      color='success'
      className='w-6 h-4 mx-auto'
      checked={isCorrect ? checked : ''}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}