import { Container, Button, Question } from "../components";
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Test() {
  const navigate = useNavigate()
  const [quiestions, setQuestion] = useState()
  useEffect(() => {
    axios.get('/api/quiz/questions')
      .then(res => {
        setQuestion(res.data)
        console.log(res.data)
      })
      .catch(error => {
        console.error('Error fetcning', error)
      })
  }, [])


  return (
    <Container>
      {quiestions && <Question question={quiestions.question} variants={quiestions.variants} /> }
      <div className="flex gap-10 mt-10 mb-10">
        <Button text='Prev question'/>        
        <Button text='Next question'/>
      </div>
      <Button 
      text={'Main page'} 
      classname={'text-center'} 
      onClick={() => navigate('/')}/>
    </Container>
  )
}
