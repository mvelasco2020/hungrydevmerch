import './signin.scss'
import React, { Component } from 'react'
import FormInput from '../../components/form-input/form-input'
import CustomButton from '../../components/custom-button/custom-button.jsx'
import {auth, signInWithGoogle } from '../../firebase/firebase.utils'

export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        try {
          await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }

    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className='sign-in' >
                <h2>I already have an account.</h2>
                <span>Sign in with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                        label='Email' />
                    <FormInput type="password" name='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                        label='Password' />
                        
                    <div className="buttons">
                        <CustomButton type="submit">
                            Sign In
                    </CustomButton>

                        <CustomButton onClick={signInWithGoogle}
                            isGoogleSignIn>
                            Use Google Account
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
