import firebase from "firebase/app";

import 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_0rFRtQ6W0eIgu6vP5KVxqEFmRXZWqo4",
  authDomain: "react-coder-proyect.firebaseapp.com",
  projectId: "react-coder-proyect",
  storageBucket: "react-coder-proyect.appspot.com",
  messagingSenderId: "309943870958",
  appId: "1:309943870958:web:533898c794b4b291759aff"
};

//Inicializamos la app
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore =()=>{
    return firebase.firestore(app)
}