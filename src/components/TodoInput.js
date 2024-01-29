const TodoIput = ({ todoProps, setTodosProp}) => {
    // const { tasks } = props;
    const handleChange = (id) => {
        setTodosProp((prevInput) => 
        prevInput.map((item) => {
            if(item.id === id) {
                return {
                    ...item,
                    completed: !item.completed
                };
            }
            return item;
          })
          )
          console.log(todoProps);
    }

    return (
        <>
            <menu className="todo-menu">
                {
                    todoProps.map((item) => (
                        <li
                          key={item.id}
                          className="todo-item"
                        >
                          <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => handleChange(item.id)}
                           />
                          {item.title}
                        </li>
                    ))
                }
            </menu>
        </>
    )
}
export default TodoIput
