export const SET_USERNAME = 'SET_USERNAME';
export const REMOVE_USERNAME = 'REMOVE_USERNAME';

export const setUsername = name => {
    return {
        type: SET_USERNAME,
        payload: name
    }
};

export const deleteTodo = () => {
    return {
        type: REMOVE_USERNAME
    }
};