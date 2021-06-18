var firebase = require('firebase')
var firebaseConfig = {
    apiKey: "AIzaSyAWV4nEzwTZ0mOaa95-FVOKfmOX65KY_mQ",
    authDomain: "newsapp-ae9c7.firebaseapp.com",
    projectId: "newsapp-ae9c7",
    storageBucket: "newsapp-ae9c7.appspot.com",
    messagingSenderId: "389711054164",
    appId: "1:389711054164:web:b1e24c0be46ac263f3f4c1"
};
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
module.exports = fb
