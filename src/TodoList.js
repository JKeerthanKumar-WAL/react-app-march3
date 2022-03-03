import TodoReducerContext from "./TodoReducerContext";
import { useContext } from "react";
const TodoList = () => {
    const reducerValue = useContext(TodoReducerContext);
    return (
        <div className="divList">
            {reducerValue.state.map((val, index) => {
                return (
                    <div className="card">
                        <h2>Todo Detail {index + 1}</h2>
                        <b>Todo : </b>{val.todo}<br />
                        <b>Status : </b>{val.status} <br />
                        <button onClick={() => { reducerValue.dispatch({ type: "delete", payload: index }) }}><b>Delete</b></button>
                    </div>
                )
            })}
        </div>
    )
};
export default TodoList;