import firebase from 'firebase';
import '@firebase/firestore';
require('firebase/firestore');
var firebaseConfig = {
    apiKey: "AIzaSyBHkXyJxRSdH1IgtBP0kM4WV_Nrnlca9X4",
    authDomain: "booksanta-6aaaf.firebaseapp.com",
    projectId: "booksanta-6aaaf",
    storageBucket: "booksanta-6aaaf.appspot.com",
    messagingSenderId: "213010519395",
    appId: "1:213010519395:web:287168378f9551aae8af56"
  };
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

var db = firebase.firestore();
export default db;