import React, { Component } from 'react';

class RecipePost extends Component {
  render() {
    const {name, title } = this.props.recipe;
    return(
      <div>{ title } {name}</div>
    );
  }
}

export default RecipePost;
