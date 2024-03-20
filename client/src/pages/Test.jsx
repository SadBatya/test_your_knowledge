import { Container, Button, Question } from '../components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Test() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    axios
      .get('http://localhost:3000/question')
      .then((res) => {
        setLoading(false);
        setQuestions(res.data);
      })
      .catch((error) => {
        setLoading(false);
        console.error('Error fetcning', error);
      });
  }, []);

  const disabledButtonStyle =
    'cursor-auto text-gray-200 hover:text-gray-200 hover:bg-white';
  return (
    <Container>
      {loading ? (
        <p>Please wait...</p>
      ) : (
        currentQuestionIndex >= 0 &&
        currentQuestionIndex < questions.length && (
          <Question
            variants={questions[currentQuestionIndex].variants}
            key={questions[currentQuestionIndex].id}
            question={questions[currentQuestionIndex].text}
          />
        )
      )}
      <div className='flex gap-10 mt-10 mb-10 justify-center'>
        <Button
          classname={currentQuestionIndex === 0 ? disabledButtonStyle : ''}
          text='Prev question'
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
          disabled={currentQuestionIndex === 0}
        />
        <Button
          text='Next question'
          classname={
            currentQuestionIndex === questions.length - 1
              ? disabledButtonStyle + ' hidden'
              : ''
          }
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
          disabled={currentQuestionIndex === questions.length - 1}
        />
        <Button 
          text='Finish test'
          classname={currentQuestionIndex === questions.length - 1 ? 'display-block hover:bg-green-800' : 'hidden'}
        />
      </div>
      <Button
        text={'Main page'}
        classname={'text-center max-w-32 m-auto'}
        onClick={() => navigate('/')}
      />
    </Container>
  );
}
