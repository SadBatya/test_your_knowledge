import { Container, Button, Question } from "../components";
import { useNavigate } from 'react-router-dom'

export default function Test() {
  const navigate = useNavigate()
  return (
    <Container>
      <Question />
      <div className="flex gap-10 mt-10 mb-10">
        <Button text='Next question'/>
        <Button text='Prev question'/>        
      </div>
      <Button 
      text={'Main page'} 
      classname={'text-center'} 
      onClick={() => navigate('/')}/>
    </Container>
  )
}
