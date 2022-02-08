import React, {ReactElement} from "react";

export default function Todo(props:{
    TodoAmount: number,
    setTodoAmount: React.Dispatch<React.SetStateAction<number>>
    setTodoList: React.Dispatch<React.SetStateAction<string[]>>
  }){
  let todos:ReactElement<any>[] = [];
  for(let i = 0; i < props.TodoAmount; i++){
    todos.push(
      <div key ={i} className='flex justify-between items-center w-full h-14 bg-gray-100 border-none border rounded-lg my-3 p-1'>
        {i}
        <button 
          onClick={() => DeleteTodo({i}) }
          className="w-5 h-5 rounded-sm bg-slate-400 text-white items-center flex justify-center "> X </button>
      </div>
    )
  }
  return (
    <>
      {todos}
    </>
  )
}

function DeleteTodo(id: {i: number}){
  // const filteredTodos = Todo.filter((todo: string, index: number) => index !== id.i);
  console.log('halo')
}