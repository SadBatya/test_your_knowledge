import Li from "./Li"

export default function Question() {
  return (
    <div className="mt-10">
      <h1 className="text-xl">Здесь будет вопрос?</h1>
      <ul className="mt-5">
        {/* Здесь нужно оптимизировать li чтобы соблюдать принцип dry */}
        <Li text={'Вариант-1'}/>
        <Li text={'Вариант-2'}/>
        <Li text={'Вариант-3'}/>
        <Li text={'Вариант-4'}/>



        {/* <li className="flex mb-2 select-none border p-2 rounded-md items-center gap-3 cursor-pointer">
          <input className="cursor-pointer" type="radio" id="answer-1" name="answer"/>
          <label className="cursor-pointer" htmlFor="answer-1">Вариант 1</label>
        </li>
        <li className="flex mb-2 select-none border p-2 rounded-md items-center gap-3 cursor-pointer" id="answer-2">
          <input className="cursor-pointer" type="radio" id="answer-2" name="answer"/>
          <label className="cursor-pointer" htmlFor="answer-2">Вариант 2</label>
        </li>
        <li className="flex mb-2 select-none border p-2 rounded-md items-center gap-3 cursor-pointer">
          <input className="cursor-pointer" type="radio" id="answer-3" name="answer"/>
          <label className="cursor-pointer" htmlFor="answer-3">Вариант 3</label>
        </li>
        <li className="flex mb-2 select-none border p-2 rounded-md items-center gap-3 cursor-pointer">
          <input className="cursor-pointer" type="radio" id="answer-4" name="answer"/>
          <label className="cursor-pointer" htmlFor="answer-4">Вариант 4</label>
        </li> */}
      </ul>
    </div>
  )
}


