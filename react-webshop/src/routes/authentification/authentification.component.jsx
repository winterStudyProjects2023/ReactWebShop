import React from 'react';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form';
import './authentification.styles.scss';

export default function Authentication() {

    return (
            <div className='authentication-container'>
                <SignInForm />
                <SignUpForm />
            </div>
    );
}
