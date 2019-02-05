import { combineReducers } from 'redux';
import user from './reducer_user';
import recipeReducer from './reducer_recipes';

export default combineReducers({
  user,
  recipe: recipeReducer
})
