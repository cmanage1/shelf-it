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

//Mounting links for Password Forget Component and SignUp Components
const SignInPage = () => (
    <div>
        <h1 className="sign-headings" >SignIn</h1>
        <SignInForm />
        <PasswordForgetLink />
        <SignUpLink />
    </div>
);

//Setting the initial variables for the values inside the form
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

/*  This component where the user can sign in for the app
It uses Firebase Authentication API to log in users
*/
class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    /* This function handles what happens when the user submits the form
    It logs them in using Firebase Auth and redirects to the "Search" page
    */
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
        event.preventDefault(); //Prevent the page from reloadng
    };

    /* This function handles the changes input boxes and sets a React State for them
    React States: https://reactjs.org/docs/faq-state.html
    */
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    // React method for writing to UI
    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === ''; //To disable loginFunctions when form is empty

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
/*This is here to be able to mount the component without redirecting the user to a route
I plan to use this in the account page in a Future Iteration */
const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);


export default SignInPage;
export { SignInForm };
