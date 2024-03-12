import { Button } from "../components"
import { useNavigate } from 'react-router-dom'


export default function StartPage() {
  const navigate = useNavigate()

  return (
    <div className="h-screen relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-white"><img src="/public/quiz.png" className="w-20 h-22 mx-auto mb-2 animate-bounce"/></div>
        <h1 className="text-center mb-5 text-4xl">Quiz 0.asdasdasdsdas1</h1>
        <div className="flex gap-5">
          <Button text={'Start Test'} onClick={() => navigate('/test')}/>
          <Button text={'Edit Test'} onClick={() => navigate('/edit')}/>
        </div>
      </div>
    </div>
      
    
  )
}
