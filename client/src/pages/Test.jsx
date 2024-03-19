import { Container, Button, Question } from '../components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Test() {
  const navigate = useNavigate();
  const [quiestions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/question')
      .then((res) => {
        setQuestions(res);
      })
      .catch((error) => {
        console.error('Error fetcning', error);
      });
  }, []);

  return (
    <Container>
      {console.log('ответ сервера', quiestions)}
      <Question />
      <div className='flex gap-10 mt-10 mb-10'>
        <Button text='Prev question' />
        <Button text='Next question' />
      </div>
      <Button
        text={'Main page'}
        classname={'text-center'}
        onClick={() => navigate('/')}
      />
    </Container>
  );
}
