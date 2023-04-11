const ToDo = (props) => {

    const todoClasses = ["style"];
    if (props.todo.complete) {
        todoClasses.push ("todo-text");
    }

return (
    <div>
        <input onChange={(e) => {props.handleComplete(props.i); }} checked={props.todo.complete} type="checkbox" />
        {/* when we change the checkbox value to true, we have checked that the todo has been completed */}
        <span className={todoClasses.join(" ")}>{props.todo.text} </span>
        {/* displaying todo input and allows us to incorprate todoClasses so we can display the line through across our completed to do */}
        <button onClick={(e) => {props.handleDelete(props.i)}} style={{marginLeft: "20px"}} >Delete</button>
        {/* deleting the todo text */}
    </div>
)};

export default ToDo;