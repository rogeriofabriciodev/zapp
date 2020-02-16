import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCfeRvvRf6-Hw7eeamdvzpEbhnO8Vm_rso",
    authDomain: "zapp-ac004.firebaseapp.com",
    databaseURL: "https://zapp-ac004.firebaseio.com",
    projectId: "zapp-ac004",
    storageBucket: "zapp-ac004.appspot.com",
    messagingSenderId: "1077277342809",
    appId: "1:1077277342809:web:86287ba9a7547b01ca4548",
    measurementId: "G-3B145FECWE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase