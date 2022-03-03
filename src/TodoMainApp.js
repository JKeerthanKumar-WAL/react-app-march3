import { useReducer } from "react";
import TodoForm from "./TodoForm";
import TodoReducerContext from "./TodoReducerContext";
import TodoList from "./TodoList";
import TodoReducer from "./TodoReducer";
const TodoMainApp = () => {
    const initialValue = [{ todo: "Cook Breakfast", status: "Complete" }, { todo: "Do coding", status: "Incomplete" }]
    const [state, dispatch] = useReducer(TodoReducer, initialValue);
    const reducerValue = { state, dispatch };
    return (
        <div className="App-div">
            <h1>Todo App</h1>
            <TodoReducerContext.Provider value={reducerValue}>
                <TodoForm />
                <TodoList />
            </TodoReducerContext.Provider>
        </div>
    );
};
export default TodoMainApp;