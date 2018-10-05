import { combineReducers } from 'redux';
import user from './reducer_user';
import recipes from './reducer_recipes';

export default combineReducers({
  user,
  recipes
})
