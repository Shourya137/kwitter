GGGGGGGGGG
//ADD YOUR FIREBASE LINKS HERE
//ADD YOUR FIREBASE LINKS // 
var firebaseConfig = {
      apiKey: "AIzaSyB98_9Bz0WGQYNEBGx62DC50s3S_smxoZg",
      authDomain: "kwitter-b4726.firebaseapp.com",
      databaseURL: "https://kwitter-b4726-default-rtdb.firebaseio.com",
      projectId: "kwitter-b4726",
      storageBucket: "kwitter-b4726.appspot.com",
      messagingSenderId: "581524694970",
      appId: "1:581524694970:web:5bf31b2c3516685fdd5f83"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
       user_name = localStorage.getItem("user_name");
        document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
});
localStorage.setItem("room_name",room_name);

window.location="kwitter_page.html";

}







function getData() 

{
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name ' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML +=row
      //End code
      });});}
getData();
   
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
 
  function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location="index.html";
  }
   