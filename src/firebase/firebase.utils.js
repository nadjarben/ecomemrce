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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("errror creating user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
