import { Question, Button, Container } from '../components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EditTest() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

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

  return (
    <div className='w-6/12 flex flex-col justify-center items-center mx-auto'>
      <div className='flex flex-col'>
        {loading ? (
          <Container>
            <p>Please wait...</p>
          </Container>
        ) : (
          questions.map((question) => (
            <Question
              key={question.id}
              question={question.text}
              variants={question.variants}
              isCorrect={question.variants}
            />
          ))
        )}
      </div>
      <div className='flex flex-col gap-3'>
        <Button
          text={'Main Page'}
          classname={'text-center '}
          onClick={() => navigate('/')}
        />
        <Button
          text={'Save test'}
          classname={'hover:bg-green-700'}
        />
      </div>
    </div>
  );
}
