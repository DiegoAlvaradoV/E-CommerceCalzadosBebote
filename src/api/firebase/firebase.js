import firebase from 'firebase/app';
import 'firebase/firestore';

//Objeto de la configuración del proyecto Firestore
const config = {
    apiKey: "AIzaSyDF6HhnwEf071B1j08w3Q2AkEqaqaskmfQ",
    authDomain: "bebote-bd671.firebaseapp.com",
    projectId: "bebote-bd671",
    storageBucket: "bebote-bd671.appspot.com",
    messagingSenderId: "598881772851",
    appId: "1:598881772851:web:c227ac6e1bdb3222630a46"
};

//Instancia de la app ya inicializada
const app = firebase.initializeApp(config);

//Instancia de Firestore
export const firestore = firebase.firestore(app);