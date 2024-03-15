import Li from "./Li"

export default function Question({ question, variants }) {
  return (
    <div className="mt-10">
      <h1 className="text-xl">Здесь будет вопрос? {question}</h1>
      <ul className="mt-5">
        <Li text={variants}/>
      </ul>
    </div>
  )
}


