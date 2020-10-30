import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDPWRP5Im6UoPhN71lNNPVVSIkXRmNXU6Q",
  authDomain: "crwn-db-c24eb.firebaseapp.com",
  databaseURL: "https://crwn-db-c24eb.firebaseio.com",
  projectId: "crwn-db-c24eb",
  storageBucket: "crwn-db-c24eb.appspot.com",
  messagingSenderId: "466217796356",
  appId: "1:466217796356:web:54380afeffba9898b04651",
  measurementId: "G-WRBM9VBS5X"
};
firebase.initializeApp(config);

export const createUserDocument = async (userAuth, ...otherFields) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = userRef.get();

  if (!snapShot) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        displayName,
        createdAt,
        ...otherFields
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
