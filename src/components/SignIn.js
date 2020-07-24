/*  
Author: Chethin Manage  
Credit to: https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial
*/

import React, { Component } from 'react';
import '.././App.css';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './ForgotPassword';
import { withFirebase } from './Firebase';

const SignInPage = () => (
    <div>
        <h1 className="sign-headings" >SignIn</h1>
        <SignInForm />
        <PasswordForgetLink />
        <SignUpLink />
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push( "/search");
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <form onSubmit={this.onSubmit} className="sign-in-form">
                <input
                    className="input-text"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    className="input-text"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <button className="sign-in-btn" disabled={isInvalid} type="submit">
                    Sign In
        </button>

                {error && <p className="error" >{error.message}</p>}
            </form>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
