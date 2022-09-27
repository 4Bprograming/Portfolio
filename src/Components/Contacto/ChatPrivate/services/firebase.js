import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAs8EJZkGmqnNslibr6_fBIeQdb_HhYUlc",
  authDomain: "chat-3-a4922.firebaseapp.com",
  projectId: "chat-3-a4922",
  storageBucket: "chat-3-a4922.appspot.com",
  messagingSenderId: "359357879987",
  appId: "1:359357879987:web:a711f64d6d1bf6018a82c6"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
