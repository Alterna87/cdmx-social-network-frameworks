import React from 'react';
import photo from '../assets/SinFoto.jpg';


const RecipePost =()=> {
  return(
    <div className = 'row'>
    <div className="col s12 m6">
    <div className="card">
      <div className="card-image">
        <img src={photo}/>
      </div>
      <div className="card-content">
          <span className="card-title title-recipe">Titulo</span>
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

export default RecipePost;
