import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBp-fGGDRUP6_frrnxhO9Gtg4Y84PMfp9o",
  authDomain: "wirelessbuzzer-15674.firebaseapp.com",
  databaseURL: "https://wirelessbuzzer-15674-default-rtdb.firebaseio.com",
  projectId: "wirelessbuzzer-15674",
  storageBucket: "wirelessbuzzer-15674.appspot.com",
  messagingSenderId: "642577532094",
  appId: "1:642577532094:web:542a4b27d900ea22dccaef",
  measurementId: "G-T2493FBFKD"
  };


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()