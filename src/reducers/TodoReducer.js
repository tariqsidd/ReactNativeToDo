import { ADD_TODO, REMOVE_TODO, UPDATE_STATUS } from '../actions/todos';

const initialState = {
    todos: []
};

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case REMOVE_TODO:
            state.todos.splice(action.payload, 1);
            return {
                ...state,
                todos: state.todos
            };
        case UPDATE_STATUS:
            let todos = state.todos;
            todos[action.payload].status = true;
            return {
                ...state,
                todos
            };
        default:
            return state;
    }
}

export default todoReducer;