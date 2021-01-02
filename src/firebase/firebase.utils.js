import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAVcPEF8LuyoLNun-qfC7_4jyC-McJeQjY",
  authDomain: "crown-db-79c7d.firebaseapp.com",
  projectId: "crown-db-79c7d",
  storageBucket: "crown-db-79c7d.appspot.com",
  messagingSenderId: "123381687328",
  appId: "1:123381687328:web:e05585ddbeed2d75fd0845",
  measurementId: "G-98PQN0PDN3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
