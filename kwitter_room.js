var firebaseConfig = {
    apiKey: "AIzaSyAT_Z1-oMHy7kQZrtcLNbp7oDdxUAEhves",
    authDomain: "quitter-96a74.firebaseapp.com",
    databaseURL: "https://quitter-96a74-default-rtdb.firebaseio.com",
    projectId: "quitter-96a74",
    storageBucket: "quitter-96a74.appspot.com",
    messagingSenderId: "317521412773",
    appId: "1:317521412773:web:6ac501a28421ff0130034c"
};

firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();