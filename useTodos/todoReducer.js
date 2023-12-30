export const todoReducer = (inicialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...inicialState, action.payload];
        case '[TODO] Delete Todo':
            return inicialState.filter(todo => todo.id !== action.payload);
        case '[TODO] Toggle Todo':
            return inicialState.map(todo => (todo.id === action.payload) ? { ...todo, done: !todo.done } : todo);
        default:
            return inicialState;
    }
};