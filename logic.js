  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCx2Y4MI7-f90t-rQvRqwAyeVNZWYjjtpk",
    authDomain: "clickscountdown-192121.firebaseapp.com",
    databaseURL: "https://clickscountdown-192121.firebaseio.com",
    projectId: "clickscountdown-192121",
    storageBucket: "clickscountdown-192121.appspot.com",
    messagingSenderId: "754529528154"
  };
  firebase.initializeApp(config);

  var count = 100;

//   A listner/ snapshot.val() is like a response from an  AJAX request but encoded
firebase.database().ref().on("value",function(snapshot){
    console.log(snapshot.val());
    count = snapshot.val().clicks;
    $('#clickValue').html(count);
})

$('#clickButton').on("click",function(){
    count--;
    firebase.database().ref().set({
        clicks:count
    });
})

$('#restartButton').on("click",function(){
    firebase.database().ref().set({
        clicks:100
    });
})

// =====================================================================
// The RULES require authentication
// {
//     "rules": {
//       ".read": "auth != null",
//       ".write": "auth != null"
//     }
//   }
// =======================================================================
// Make adjustments on my Firebase CONSOLE when in use
// {
//     "rules": {
//       ".read": true,
//       ".write": true
//     }
//   } 
// PUBLISH, be certain to secure database again before going into production.
