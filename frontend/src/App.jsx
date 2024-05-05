import { useEffect, useState } from 'react'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
  console.log('hi app')

  useEffect(()=>{
    fetch('http://localhost:5000/todos').then(async(res)=>{
        const data = await res.json()
        setTodos(data.todos)
    }).catch(error=>{
        console.log(error)
    })
  },[])

  return (
    <>
      <div>
        <CreateTodo/>
        <Todos todos={todos}/>
      </div>
    </>
  )
}

export default App
