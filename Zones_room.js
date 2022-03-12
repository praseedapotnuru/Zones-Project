//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD8iW1SXmZ75IW_tGS48-LZJ44v0T8_iyg",
	authDomain: "zones-ac79b.firebaseapp.com",
	databaseURL: "https://zones-ac79b-default-rtdb.firebaseio.com",
	projectId: "zones-ac79b",
	storageBucket: "zones-ac79b.appspot.com",
	messagingSenderId: "820646556238",
	appId: "1:820646556238:web:374ca9cbcdfd21d057091f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "♡";

function addRoom() {
	room_name = document.getElementById("room_name").value;
	firebase.database().ref("/").child(room_name).update({
		purpose: "adding room name"
	});
	localStorage.setItem("room_name", room_name);
	window.location = "Zones_page.html";
}

function getData() {
	firebase.database().ref("/").on('value', function (snapshot) {
		document.getElementById("output").innerHTML = "";
		snapshot.forEach(function (childSnapshot) {
			childKey = childSnapshot.key;
			Room_names = childKey;
			//Start code
			console.log("Room Name - " + Room_names);
			row = "<div class='room_name' id=" + Room_names + 
				"onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
			document.getElementById("output").innerHTML += row;
			//End code
		});
	});
}
getData();

function logout() { 
	localStorage.removeItem("user_name"); 
	localStorage.removeItem("room_name"); 
	window.location = "index.html"; 
}

function redirectToRoomName(name) { 
	console.log(name); 
	localStorage.setItem("room_name", name); 
	window.location = "Zones_page.html"; 
}