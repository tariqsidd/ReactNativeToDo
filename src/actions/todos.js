export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_STATUS = 'UPDATE_STATUS';

export const addTodo = title => {
    return {
        type: ADD_TODO,
        payload: {title, status: false}
    }
};

export const deleteTodo = index => {
    return {
        type: REMOVE_TODO,
        payload: index
    }
};

export const updateStatus = index => {
    return {
        type: UPDATE_STATUS,
        payload: index
    }
};