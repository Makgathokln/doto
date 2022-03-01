import firebase from 'firebase';
import "firebase/database";

// Your web app's Firebase configuration
let Config = {
  apiKey: "AIzaSyDS98Rnc-xOLealTmQfqPTOYC3ZP1Yeirk",
  authDomain: "todo-fd9eb.firebaseapp.com",
  databaseURL: "https://todo-fd9eb-default-rtdb.firebaseio.com",
  projectId: "todo-fd9eb",
  storageBucket: "todo-fd9eb.appspot.com",
  messagingSenderId: "728014493832",
  appId: "1:728014493832:web:971aca0b00d4c6553d273d"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

firebase.initializeApp(Config);
export default firebase.database();