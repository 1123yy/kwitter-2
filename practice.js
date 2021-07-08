 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBlX8gJzOVNbPRAUpzZH2Sj3av51kAZGXg",
    authDomain: "medichat-fc162.firebaseapp.com",
    databaseURL: "https://medichat-fc162-default-rtdb.firebaseio.com",
    projectId: "medichat-fc162",
    storageBucket: "medichat-fc162.appspot.com",
    messagingSenderId: "1033639904834",
    appId: "1:1033639904834:web:61a15e1349cdfa95a6cfdb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {
user_name=document.getElementById("user_name").nodeValue;
firebase.database().ref("/").child(user_name).update({
    porpuse:"adding user"
});
}
//ADD YOUR FIREBASE LINKS