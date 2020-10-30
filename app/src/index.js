import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZHzDYwqqLdhLVKfiQSzLo5JQTZRRopYo",
  authDomain: "wot-eindwerk.firebaseapp.com",
  databaseURL: "https://wot-eindwerk.firebaseio.com",
  projectId: "wot-eindwerk",
  storageBucket: "wot-eindwerk.appspot.com",
  messagingSenderId: "407409833062",
  appId: "1:407409833062:web:4cf7e960153ea09678e9a7",
  measurementId: "G-137B8QB117"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

