import { combineReducers } from 'redux'
import todoReducer from './TodoReducer';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
    todos: todoReducer,
    users: userReducer
});

export default rootReducer