import { combineReducers } from 'redux';
import authReducer from './authentication';
import categoreisReducer from "./categories";
import categoryMealsReducer from './categoryMeals';
import searchReducer from './search';
import randomMealReducer from './randomMeal';

export default combineReducers({
    authanticated: authReducer,
    categories: categoreisReducer,
    categoryMeals: categoryMealsReducer,
    search: searchReducer,
    randomMeal: randomMealReducer
})