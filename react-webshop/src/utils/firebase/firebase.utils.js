import { initializeApp } from 'firebase/app';

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDygdtFFxzlgqSY7pEta-f-smUrCyCQOvk",  
    authDomain: "react-web-shop-db.firebaseapp.com",
    projectId: "react-web-shop-db",
    storageBucket: "react-web-shop-db.appspot.com",
    messagingSenderId: "720214883839",
    appId: "1:720214883839:web:d94199f295379bb9157bca"
  };
  
  // Initialize Firebase
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  })

  
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup( auth, provider);
  
  export const db = getFirestore();

  export const createUsesDocumentFromAuth = async(userAuth) =>{

        const userDocRef = doc(db,'users', userAuth.uid);
        const userSnashot = await getDoc(userDocRef);
        console.log(userSnashot.exists());

        if (!userSnashot.exists()){
          const {displayName, email} = userAuth;
          const createdAt = new Date();
          try {
            await setDoc ( userDocRef, {
              displayName,
              email,
              createdAt
            });
          } catch(error) {
            console.log('error', error.message);
          }
        }

        return userDocRef;
  };