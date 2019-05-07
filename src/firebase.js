import firebase from "firebase/app";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyCSI4M5LyNqJB2i8CwLCR4org-g8NW6H1Y",
  authDomain: "blog-stuff-486cf.firebaseapp.com",
  databaseURL: "https://blog-stuff-486cf.firebaseio.com",
  projectId: "blog-stuff-486cf",
  storageBucket: "blog-stuff-486cf.appspot.com",
  messagingSenderId: "99026504513",
  appId: "1:99026504513:web:d3306d0de33d0637"
};

// Initialize Firebase
firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;
