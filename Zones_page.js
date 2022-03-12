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

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function send() {
	msg = document.getElementById("msg").value;
	firebase.database().ref(room_name).push({
		name: user_name,
		message: msg,
	});
	document.getElementById("msg").value = "";
}

function getData() {
	firebase.database().ref("/" + room_name).on('value', function (snapshot) {
		document.getElementById("output").innerHTML = "";
		snapshot.forEach(function (childSnapshot) {
			childKey = childSnapshot.key;
			childData = childSnapshot.val();

			if (childKey != "purpose") {
				firebase_message_id = childKey;
				message_data = childData;

				//Start code
				console.log(firebase_message_id);
				console.log(message_data);
				name = message_data['name'];
				message = message_data['message'];
				name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
				message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
				row = name_with_tag + message_with_tag;
				document.getElementById("output").innerHTML += row;
				//End code
			}
		});
	});
}
getData();

function logout() {
	localStorage.removeItem("user_name");
	localStorage.removeItem("room_name");
	window.location.replace("index.html");
}