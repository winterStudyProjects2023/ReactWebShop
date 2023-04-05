import { initializeApp } from 'firebase/app';

import {
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    updatePassword
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

  export const createUserDocumentFromAuth = async(userAuth, optionalInformation = {}) =>{
        if (!userAuth) return;

        const userDocRef = doc(db,'users', userAuth.uid);
        const userSnashot = await getDoc(userDocRef);

        if (!userSnashot.exists()){
          const {displayName, email} = userAuth;
          const createdAt = new Date();
          try {
            await setDoc ( userDocRef, {
              displayName,
              email,
              createdAt,
              ...optionalInformation,
            });
          } catch(error) {
            console.log('error', error.message);
          }
        }
        return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword (auth, email, password);
  }

  export const signInAuthUserWithEmailAndPassword = async (email,password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email,password);
  }