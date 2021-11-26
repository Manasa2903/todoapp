import { useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList.jsx';

function App() {

  const [todoList , setTodoList] = useState([])
  const [inputVal , setInputVal] = useState("")
  const [id, setId] = useState(1)

  const addTodo = (event) =>
  {
    event.preventDefault()
    let newTodo = {
      id : id,
      todoValue : inputVal
    }
    setTodoList(prevState => ([...prevState, newTodo]))
    setId(id + 1)
    setInputVal("")
  }

  const deleteTodo = (id) =>
  {
    const filteredTodo = todoList.filter(eachTodo => eachTodo.id !== id)

    setTodoList(filteredTodo)
  }


  const handleInput = (event) =>
  {
    setInputVal(event.target.value)
  }

  return (
    <>
   <form onSubmit={addTodo}> 
     <input type="text" className="todo-input" onChange={handleInput} value={inputVal} required/>
     <button type="submit">Add Todo</button>
   </form>
   {
     todoList.map(eachTodo => <TodoList key={eachTodo.id} todoDetails={eachTodo} deleteTodo = {deleteTodo}/>)
   }
   {
       console.log(todoList)
   }
   </>
  );
}

export default App;
