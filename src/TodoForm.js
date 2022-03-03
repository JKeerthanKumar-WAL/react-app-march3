import { useContext, useState } from "react";
import TodoReducerContext from "./TodoReducerContext";
const TodoForm = () => {
    const { dispatch } = useContext(TodoReducerContext);
    const [todo, setTodo] = useState();
    const [status, setStatus] = useState();
    return (
        <div>
            <b>Enter a Todo : </b><input type="text" name="todo" onInput={(event) => { setTodo(event.target.value) }} /><br />
            <b>Status of Todo : </b><select name="status" onInput={(event) => { setStatus(event.target.value) }}>
                <option value="Complete">Complete</option><br />
                <option value="Incomplete">Incomplete</option><br />
            </select><br />
            <button onClick={() => {dispatch({ type: "add", todo: todo, status: status });}}><b>Add</b></button><br />
            <button onClick={() => { dispatch({ type: "clear" }); }}><b>Clear All</b></button>
        </div>
    );
};
export default TodoForm;