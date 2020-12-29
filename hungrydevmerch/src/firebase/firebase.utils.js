import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDwRJxmETdR5w_Up5Muti25GUZfBycnf34",
  authDomain: "hungrydevmerch.firebaseapp.com",
  databaseURL: "https://hungrydevmerch-default-rtdb.firebaseio.com",
  projectId: "hungrydevmerch",
  storageBucket: "hungrydevmerch.appspot.com",
  messagingSenderId: "52482275396",
  appId: "1:52482275396:web:19a95209e1da0c5116e411",
  measurementId: "G-26WH26P8B1"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //return if user is not signed in
  if (!userAuth) {
    return;
  }
//check if a record in db exist via snapshoyt
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  //if signed in but not in the database, add to database 
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

//set up authentication 
//sign in with google
const provider = new firebase.auth.GoogleAuthProvider();
//used in select google account prompt
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
}

export default firebase;