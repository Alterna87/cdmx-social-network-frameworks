import React, { Component,  } from 'react';
import { connect } from 'react-redux';
import { recipeRef } from '../firebase';
import { setRecipe } from '../actions';
import RecipePost from './RecipePost';

class ListRecipe extends Component {

componentDidMount() {
recipeRef.on('value', snap => {
  let recipes = [];
  snap.forEach(recipe => {
      const {email, title, ingredients, steps, name, images, urlPhoto  } = recipe.val();
    //let recipObject = recipe.val();
      recipes.push({email, title, ingredients, steps, name, images, urlPhoto});
    })
    console.log('recipes', recipes);
    this.props.setRecipe(recipes);
});

}

render() {
  console.log('this.props.recipes', this.props.recipes);
  return (
    <div>{this.props.recipes.map((recipe, index) => {
      return (
        //<div key = { index }>{recipe.title}</div>
        <RecipePost key = { index } recipe = { recipe } />
      );
    }).reverse()

  }
  </div>
  );
}
  }

  function mapStateToProps(state) {
    const { recipes } = state;
    return {
      recipes
    }
  }

export default connect(mapStateToProps, { setRecipe })(ListRecipe);
