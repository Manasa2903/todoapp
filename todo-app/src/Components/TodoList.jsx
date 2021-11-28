const TodoList = ({todoDetails, deleteTodo}) => {

    const {id, todoValue, todoDescription} = todoDetails

    const onDeleteTodo = () =>
    {
        deleteTodo(id)
    }

  

    return(
        <div className="todo">
            <div className="todo-details-container">
                <h1 className="todo-name">{todoValue}</h1>
                <p className="todos-description">{todoDescription}</p>
            </div>
            <button onClick={onDeleteTodo} className="todo-button">Delete</button>
        </div>
    )
}

export default TodoList