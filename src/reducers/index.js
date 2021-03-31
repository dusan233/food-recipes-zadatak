import { combineReducers } from 'redux';
import authReducer from './authentication';
import categoreisReducer from "./categories";

export default combineReducers({
    authanticated: authReducer,
    categories: categoreisReducer
})