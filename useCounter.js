import { useState } from "react";

export const useCounter = (initValue = 0) => {
    const [counter, setCounter] = useState(initValue);

    const increment = (value = 1) => setCounter((current) => current + value);
    const decrement = (value = 1) => setCounter((current) => current - value);
    const reset = () => setCounter(initValue);

    return { counter, increment, decrement, reset };
};