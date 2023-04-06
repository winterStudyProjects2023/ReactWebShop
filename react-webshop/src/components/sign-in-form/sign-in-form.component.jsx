import FormInput from "../form-input/form-input.component."
import Button from "../button/button.component"
import { useState } from "react";
import {
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
    createUserDocumentFromAuth
}
    from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss'


export default function SignInForm() {

    const logInCredentials = {
        email: '',
        password: ''
    }

    
    const [logInCredential, setLogInCredential] = useState(logInCredentials);
    const { email, password } = logInCredential;

    const clearFormFields = () => {
        setLogInCredential(logInCredentials);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLogInCredential({ ...logInCredential, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!password || !email) {
            alert("Missing credentials!");
            return;
        }
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            clearFormFields();
        }
        catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Inccorect password');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with the email');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const signInWithGoogle = async () => {
     await signInWithGooglePopup();
    };

    return (
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    required
                    name='email'
                    onChange={handleChange}
                    value={email}
                />
                <FormInput
                    label='Password'
                    type='password'
                    required
                    name='password'
                    onChange={handleChange}
                    value={password}
                />
                <div className="buttons-container">
                    <Button type='submit'>SIGN IN</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle} >SIGN IN WITH GOOGLE</Button>
                </div>
            </form>
        </div>
    )
}
