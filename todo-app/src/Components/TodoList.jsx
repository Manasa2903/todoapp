const TodoList = ({todoDetails, deleteTodo}) => {

    const {id, todoValue} = todoDetails

    const onDeleteTodo = () =>
    {
        deleteTodo(id)
    }

  

    return(
        <div className="todo">
            <p className="todo-name">{todoValue}</p>
            <button onClick={onDeleteTodo} className="todo-button">Delete</button>
        </div>
    )
}

export default TodoList