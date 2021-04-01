import { combineReducers } from 'redux';
import authReducer from './authentication';
import categoreisReducer from "./categories";
import categoryMealsReducer from './categoryMeals';

export default combineReducers({
    authanticated: authReducer,
    categories: categoreisReducer,
    categoryMeals: categoryMealsReducer
})