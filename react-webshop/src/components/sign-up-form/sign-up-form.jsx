import React from 'react';
import { useState } from 'react';

import {
    createUserDocumentFromAuth,
    createAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component.';

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export default function SignUpForm() {

    const [formFields, setFormFields] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords does not match");
            return;
        }
        try {
            console.log('just before first');
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            console.log('passed first', user);
            await createUserDocumentFromAuth(user, { displayName });
        }
        catch (error) {
            console.log('Error while submiing', error.message);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log('event:', event.target);
        console.log('formfields:', formFields);
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                
                <FormInput
                    label='Display name'
                    type='text'
                    required
                    name='displayName'
                    onChange={handleChange}
                    value={displayName}
                />

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

                <FormInput
                    label='ConfirmPassword'
                    type='password'
                    required
                    name='confirmPassword'
                    onChange={handleChange}
                    value={confirmPassword}
                />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}
