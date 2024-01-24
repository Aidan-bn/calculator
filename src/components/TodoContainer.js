import TodoIput from "./TodoInput";

const TodoContainer = () => {
    const todo = [
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
    ];

    return(
        <>
            <h1>Welcome to a Todo Application</h1>
            <TodoIput tasks={todo} />
        </>
    )
}
export default TodoContainer;
