import React, { Component } from 'react';

class RecipePost extends Component {
  render() {
    const {name, title, ingredients, steps, images } = this.props.recipe;
    return(
      <div className = 'row'>
      <div className="col s12 m6">
      <div className="card">
        <div className="card-image">
          <img src={images}/>


        </div>
        <div className="card-content">
            <span className="card-title title-recipe">{title}</span>
          <p>Ingredientes: {ingredients} </p>
          <p>Pasos: {steps} </p>
        </div>
      </div>
    </div>
      </div>
    );
  }
}

export default RecipePost;
