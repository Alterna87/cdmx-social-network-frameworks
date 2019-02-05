import React from 'react';
import Menu from './Menu';
import photo from '../assets/SinFoto.jpg';

const RecipeDetails =(props) => {
  const id = props.match.params.id;
  return (
    <div className = 'row'>
    <header >
    <div className = 'bcg-pink' >
      <Menu/>
      </div>
    </header>
    <div className="col s12 m6">
    <div className="card">
      <div className="card-image">
        <img src={photo}/>
      </div>
      <div className="card-content">
          <span className="card-title title-recipe">Titulo - {id}</span>
        <p>Ingredientes:</p>
        <p>Pasos: </p>
        <p>Posteado por: Francis </p>
        <p className= "grey-text">3rd September, 2am</p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default RecipeDetails;
