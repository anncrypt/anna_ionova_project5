import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyApP7SRRpdc8a6-YkTgbLATe_A06O6yVD0",
    authDomain: "dreamboard-ee258.firebaseapp.com",
    databaseURL: "https://dreamboard-ee258.firebaseio.com",
    projectId: "dreamboard-ee258",
    storageBucket: "dreamboard-ee258.appspot.com",
    messagingSenderId: "208154114534"
};
firebase.initializeApp(config);

export default firebase;