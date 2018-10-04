import { SIGNED_IN, SET_RECIPE } from '../constants';

export function logUser (email) {
  const action = {
    type: SIGNED_IN,
    email
  }

  return action;
}

export function setRecipe (recipes) {
  const action = {
    type: SET_RECIPE,
    recipes
  }
  return recipes;
}
