import React, { Component,  } from 'react';
  import { recipeRef } from '../firebase';

class ListRecipe extends Component {

componentDidMount() {
recipeRef.on('value', snap => {
  snap.forEach(recipe => {
    let recipObject = recipe.val();
    console.log(recipObject);

  });
});

}

render() {

  return (
    <div>Recipe List</div>
  );
}
  }

export default ListRecipe;
