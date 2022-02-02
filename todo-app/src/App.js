import { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./Components/TodoList.jsx";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(1);
  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    let newTodo = {
      id: id,
      todoValue: inputVal,
      todoDescription: description,
    };
    setTodoList([...todoList, newTodo]);
    setFilteredList([...todoList, newTodo]);
    setId(id + 1);
    setInputVal("");
    setDescription("");
  };

  const deleteTodo = (id) => {
    const filteredTodo = todoList.filter((eachTodo) => eachTodo.id !== id);
    setTodoList(filteredTodo);
    setFilteredList(filteredTodo);
  };

  const handleInput = (event) => {
    setInputVal(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  useEffect(() => {
    const filteringList = todoList.filter((todoItem) =>
      todoItem.todoValue.toLowerCase().includes(search)
    );
    setFilteredList(filteringList);
  }, [search, todoList]);

  return (
    <>
      <h1 className="heading">Todo App</h1>
      <input
        type="text"
        className="todo-input"
        placeholder="Search Here"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        value={search}
        required
      />
      <form onSubmit={addTodo} className="form-container">
        <div>
          <input
            type=""
            className="todo-input"
            placeholder="Enter Title"
            onChange={handleInput}
            value={inputVal}
            required
          />
        </div>
        <div>
          <textarea
            value={description}
            onChange={handleDescription}
            placeholder="Add Details here...."
            className="todo-description"
            required
          />
        </div>
        <div>
          <button type="submit" className="add-button">
            Add Todo
          </button>
        </div>
      </form>

      <div className="todo-list-container">
        {filteredList.length > 0 ? (
          filteredList.map((eachTodo) => (
            <TodoList
              key={eachTodo.id}
              todoDetails={eachTodo}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <p className="no-todos">No Todos here...</p>
        )}
        {console.log(filteredList)}
        {console.log(todoList)}
      </div>
    </>
  );
}

export default App;

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [person, setPerson] = useState({ name: "lavanya", age: 21 });

//   const changeName = () => {
//     person["name"] = "Preethi";
//     console.log(person);
//     setPerson(person);
//   };

//   return (
//     <div className="App">
//       <h1>{person.name}</h1>
//       <button onClick={changeName}>click</button>
//     </div>
//   );
// }

// export default App;
