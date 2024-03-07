import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/storage";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBI6uzYDz5KplidR1eqWIl7qqCtqUjA38E",
  authDomain: "disneyplusfromluis.firebaseapp.com",
  projectId: "disneyplusfromluis",
  storageBucket: "disneyplusfromluis.appspot.com",
  messagingSenderId: "287245952529",
  appId: "1:287245952529:web:c7cad6b359421c1a8a33b0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

