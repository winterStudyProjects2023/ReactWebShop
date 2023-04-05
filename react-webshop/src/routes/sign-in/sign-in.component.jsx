import React from 'react';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form';

export default function SignIn() {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1> Sign in Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Profile
            </button>
            <SignUpForm />
        </div>
    );
}
