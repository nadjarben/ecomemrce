import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA2ujIlb3oILaG0SRbiQovi-3EFy5pigEg",
  authDomain: "ecommerce-masque.firebaseapp.com",
  databaseURL: "https://ecommerce-masque.firebaseio.com",
  projectId: "ecommerce-masque",
  storageBucket: "ecommerce-masque.appspot.com",
  messagingSenderId: "527263093870",
  appId: "1:527263093870:web:266763234bae399d24027f",
  measurementId: "G-MENT3EHL45",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
