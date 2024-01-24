const TodoIput = (props) => {
    const { tasks } = props;
    return (
        <>
            <menu className="todo-menu">
                {
                    tasks.map((task) => (
                        <li key={task.id}>
                            {task.title}
                        </li>
                    ))
                }
            </menu>
        </>
    )
}
export default TodoIput