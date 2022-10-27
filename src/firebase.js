// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM2KMDtam8PbNKFe8krdXBk45vKIKJ8YE",
  authDomain: "slack-clone-1e651.firebaseapp.com",
  projectId: "slack-clone-1e651",
  storageBucket: "slack-clone-1e651.appspot.com",
  messagingSenderId: "904292866300",
  appId: "1:904292866300:web:37e179409ac8407bfc5f79",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
