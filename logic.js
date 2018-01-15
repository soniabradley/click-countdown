var config = {
    apiKey: "AIzaSyCyG6iVQ4JAEfvWYfJUMx2aSaf2-j0EkTw",
    authDomain: "clickscountdown-5228b.firebaseapp.com",
    databaseURL: "https://clickscountdown-5228b.firebaseio.com",
    projectId: "clickscountdown-5228b",
    storageBucket: "clickscountdown-5228b.appspot.com",
    messagingSenderId: "1007305474274"
  };
  firebase.initializeApp(config);

  var count = 100;

//   A listner/ snapshot.val() is like a response from an  AJAX request but encoded
firebase.database().ref().on("value",function(snapshot){
    // console.log(snapshot.val());
    count = snapshot.val().clicks;
    $('#clickValue').html(count);
})

$('#clickButton').on("click",function(){
    count--;
    firebase.database().ref().set({
        clicks:count
    });
})


// {
//     "rules": {
//       ".read": true,
//       ".write": true
//     }
//   }

// Be certain to secure database again before going into production.
