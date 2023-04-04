import React from 'react';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { createUsesDocumentFromAuth } from '../../utils/firebase/firebase.utils';

export default function SignIn() {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUsesDocumentFromAuth(user);
    };

    return (
        <div>
            <h1> Sign in Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Profile
            </button>
        </div>
    );
}
