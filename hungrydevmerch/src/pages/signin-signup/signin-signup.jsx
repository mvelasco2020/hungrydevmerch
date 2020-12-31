import './signin-signup.scss'
import SignIn from '../../components/signin/signin.jsx'
import SignUp from '../../components/sign-up/sign-up'
import React from 'react'

const SignInSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInSignUpPage
