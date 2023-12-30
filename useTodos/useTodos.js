import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

export const useTodo = () => {

    const initialState = [
        // {
        //   id: new Date().getTime(),
        //   desc: "Aprender React",
        //   done: false,
        // }
    ];


    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: "[TODO] Add Todo",
            payload: todo,
        };

        dispatch(action);
    };

    const handleDeleteTodo = (id) => {
        const action = {
            type: "[TODO] Delete Todo",
            payload: id,
        };

        dispatch(action);
    };

    const handleToggleTodo = (id) => {
        const action = {
            type: "[TODO] Toggle Todo",
            payload: id,
        };

        dispatch(action);
    };

    return {
        todos,
        todosCount: todos.length,
        pendientesCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }

};