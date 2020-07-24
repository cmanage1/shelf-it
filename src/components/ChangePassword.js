/*
Author: Chethin Manage
Credit to: https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from './Firebase';

const ChangePasswordPage = () => (
    <div>
        <h1 className="sign-headings">Change Passowrd </h1>
        <PasswordChangeForm />
    </div>
);


const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

/*  This component where the user can sign in for the app
It uses Firebase Authentication API to let a user change passwords
*/
class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    //Handle the event when a user submits the form defined below
    //Uses firebase to "doPasswordUpdate" defined in 'Firebase/firebase/js'.
    onSubmit = event => {
        const { passwordOne } = this.state;
        this.props.firebase
            .doPasswordUpdate(passwordOne)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    /* This function handles the changes input boxes and sets a React State for them
    React States: https://reactjs.org/docs/faq-state.html
    */
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    // React method for writing to UI
    render() {
        const { passwordOne, passwordTwo, error } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo || passwordOne === '';

        return (
            <form onSubmit={this.onSubmit} className="sign-in-form">
                <input
                    className="input-text"
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="New Password"
                />
                <input
                    className="input-text"
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm New Password"
                />
                <button 
                    className="sign-in-btn"
                    disabled={isInvalid} type="submit">
                    Reset My Password
                </button>
                {error && <p className="error" >{error.message}</p>}
            </form>
        );
    }
}

//A link is defined to be used for later in another page
const PasswordChangeLink = () => (
    <p className="emphasis-text-bottom">
        Want to change your password? 
        <Link to={"/change_password"}> Click Here</Link>
    </p>
);

//Export with firebase so that there doesnt need to be any more imports where its being used
export default withFirebase(ChangePasswordPage);

//Made possible here to just export PasswordChangeForm and PasswordChangeLink
export { PasswordChangeForm, PasswordChangeLink };