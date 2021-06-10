import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCoTtHjihMCwjjyJkVyax_Hy617UQv0gvs",
  authDomain: "fir-movie-app-a2cb1.firebaseapp.com",
  projectId: "fir-movie-app-a2cb1",
  storageBucket: "fir-movie-app-a2cb1.appspot.com",
  messagingSenderId: "58149787566",
  appId: "1:58149787566:web:e0c00c5f2a0736b2cc1a3f",
});

export const createUser = async (email, password, displayName, history) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("Regiter User", user);
        history.push("/");
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Errormessage", errorMessage);
        // ..
      });
    const currentUser = firebase.auth().currentUser;
    await currentUser.updateProfile({ displayName });
  } catch (error) {
    alert("The email adress is already in use by another account!");
  }
};
export const signIn = async (email, password, history) => {
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in

      history.push("/");
      // ...
    })
    .catch((error) => {
      var errorMessage = error.message;
      alert(errorMessage);
    });
};

export const userObserver = async (setCurrentUser) => {
  await firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });
};

export const SignOut = () => {
  firebase.auth().signOut();
};

export const signUpProvider = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    promt: "select_account",
  });
  firebase.auth().signInWithPopup(provider);
};

export default firebaseApp;
