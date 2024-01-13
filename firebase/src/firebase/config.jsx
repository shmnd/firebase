import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCplDD_Ja1jSxfV05QT9MOekGYiWQZCRbw",
    authDomain: "shamnad-cea7f.firebaseapp.com",
    projectId: "shamnad-cea7f",
    storageBucket: "shamnad-cea7f.appspot.com",
    messagingSenderId: "380789754552",
    appId: "1:380789754552:web:846700eb776eba4962024d",
    measurementId: "G-9W4HFJZN40"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore();

export{firebaseApp,firestore}

// const app = initializeApp(firebaseConfig)
// const doc =getFirestore(app)

// export { doc}