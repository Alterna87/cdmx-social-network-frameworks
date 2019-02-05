const initState = {
  recipes: [
    {id: '1', name: "Pozole Mexicano", ingredients: "Maiz, chile, carne de cochino, tostadas, lechuga, rabano, comino, cebolla", steps: "Se coce el pozole, se echa al agua chile y los ingredientes", mail: "fvelueta@outlook.com", likes: 0, type: "recipe", date: "September 30th 2018"},
    {id: '1', name: "Tacos", ingredients: "Maiz, chile, carne de cochino, tostadas, lechuga, rabano, comino, cebolla", steps: "Se coce el pozole, se echa al agua chile y los ingredientes", mail: "fvelueta@outlook.com", likes: 0, type: "recipe", date: "October 24th 2018"},
    {id: '1', name: "Enchiladas", ingredients: "Maiz, chile, carne de cochino, tostadas, lechuga, rabano, comino, cebolla", steps: "Se coce el pozole, se echa al agua chile y los ingredientes", mail: "fvelueta@outlook.com", likes: 0, type: "recipe", date: "April 14th 2018"}
  ]

}

const recipeReducer = (state = initState, action) => {
  return state;
}

export default recipeReducer;
