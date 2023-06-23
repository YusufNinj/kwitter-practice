
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCii_y-wst64lAybRaz_BUh6oVeFUFg2Cw",
      authDomain: "kwitter-1364f.firebaseapp.com",
      databaseURL: "https://kwitter-1364f-default-rtdb.firebaseio.com",
      projectId: "kwitter-1364f",
      storageBucket: "kwitter-1364f.appspot.com",
      messagingSenderId: "433622358331",
      appId: "1:433622358331:web:c1f1cf6e033bc522477f1e"
    };
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
