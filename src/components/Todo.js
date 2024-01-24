import Nav from "./Navbar";
import TodoContainer from "./TodoContainer";

const Todo = () => {

    return (
        <>
            <Nav />
            <div className="todo">
                <TodoContainer />
            </div>
        </>
    )
}

export default Todo;
