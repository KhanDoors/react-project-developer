import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAYJQCNU8UBGVX7z8nxVMoec4iB9iEfVyM",
  authDomain: "project-developer-9843f.firebaseapp.com",
  databaseURL: "https://project-developer-9843f.firebaseio.com",
  projectId: "project-developer-9843f",
  storageBucket: "project-developer-9843f.appspot.com",
  messagingSenderId: "512570679431"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
