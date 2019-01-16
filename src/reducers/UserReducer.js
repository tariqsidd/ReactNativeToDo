import { SET_USERNAME, REMOVE_USERNAME } from '../actions/users';

const initialState = {
    username: ''
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload
            };
        case REMOVE_USERNAME:
            return {
                ...state,
                username: ''
            };
        default:
            return state;
    }
}

export default userReducer;