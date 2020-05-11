import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCYZAty6UdeMl-VLJ02LdfCF6E6mfdhUfo",
    authDomain: "jimtodo-748fa.firebaseapp.com",
    databaseURL: "https://jimtodo-748fa.firebaseio.com",
    projectId: "jimtodo-748fa",
    storageBucket: "jimtodo-748fa.appspot.com",
    messagingSenderId: "333228577922",
    appId: "1:333228577922:web:4e9438a0e4449efdf3d09b"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
  