import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAaMEeTfLhwDTFiUWVNbJp39Q3eYDQgT14",
  authDomain: "red-social-4ed2d.firebaseapp.com",
  databaseURL: "https://red-social-4ed2d.firebaseio.com",
  projectId: "red-social-4ed2d",
  storageBucket: "red-social-4ed2d.appspot.com",
  messagingSenderId: "704831096005"
};

export const firebaseApp = firebase.initializeApp(config);
export const refRecipe = firebase.database().ref('user/posts')
