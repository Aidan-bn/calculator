import { useState } from "react";
import TodoIput from "./TodoInput";

const TodoContainer = () => {
    const [todo, setTodo] = useState([
        {
            id: 1,
            title: 'Time to study react deeply',
            completed: true,
        },
        {
            id: 2,
            title: 'Then jump to Node JS',
            completed: true,
        },
        {
            id: 3,
            title: 'Finalize with ROR',
            completed: false,
        },
    ]);

    return(
        <>
            <h1>Welcome to a Todo Application</h1>
            <TodoIput todoProps={todo} setTodosProp={setTodo}/>
        </>
    )
}
export default TodoContainer;
