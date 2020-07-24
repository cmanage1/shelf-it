/*
Author: Chethin Manage
Credit to: https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial
*/

import React, { Component } from 'react';
import '.././App.css';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from './Firebase';

/*
Credit to: https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial
*/

const SignUp = () => (
    <div>
        <h1 className="sign-headings"> SignUp</h1>
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    newPassword: '',
    confirmPassword: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor (props){
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = e => {
         // eslint-disable-next-line
        const { username, email, newPassword } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, newPassword)
            .then(authUser => {
                // Create a user in your Firestore database
                return this.props.firebase
                    //setting new user's info into database
                    .db.collection('users').doc(authUser.user.uid).set({
                        username: username,
                        email: email,
                        items: [],
                    })
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push("/search");
            })
            .catch(error => {
                this.setState({ error });
            });
        e.preventDefault();
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render(){
        const {
            username,
            email,
            newPassword,
            confirmPassword,
            error,
        } = this.state;

        const isInvalid =
            newPassword !== confirmPassword ||
            newPassword === '' ||
            email === '' ||
            username === '';

        return(
            <form className="sign-in-form"
                onSubmit={this.onSubmit}>
                <input 
                    className="input-text"
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Username"
                />
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
                    name="newPassword"
                    value={newPassword}
                    onChange={this.onChange}
                    type="password"
                    placeholder="New Password"
                />
                <input
                    className="input-text"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button 
                    className="sign-in-btn"
                    disabled={isInvalid} type="submit">
                    Sign Up
                </button>
                {error && <p className="error" >{error.message}</p>}
                <h6 
                className="emphasis-text-bottom"> 
                Google's Firebase authetication API is used to log users, you can read about their Privacy & Policy
                <a href="https://firebase.google.com/support/privacy" target="__blank"> here </a></h6>
            </form>
            
        );
    }
}

const SignUpLink = () => (
    <p className="emphasis-text-bottom">
        Never been here before? <Link to="/signup">Sign Up Now!</Link>
    </p>
);


const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUp;
export { SignUpForm , SignUpLink };