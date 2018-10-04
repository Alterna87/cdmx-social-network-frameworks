import {SET_RECIPE } from '../constants';

export default (state = [], action ) => {
  switch (action.type) {
    case SET_RECIPE:
      const {recipes } = action;
      return recipes

    default:
      return state;
  }
}
