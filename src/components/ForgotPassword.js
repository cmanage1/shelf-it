/*
Author: Chethin Manage
Credit to: https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from './Firebase';

////Mounting component PasswordForgetForm (defined below)
const PasswordForgetPage = () => (
    <div>
        <h1 className="sign-headings">Forgot your password?</h1>
        <PasswordForgetForm />
    </div>
);

const INITIAL_STATE = {
    email: '',
    error: null,
};

/* The component is where the user can submit a request to change their password
It uses Firebase Authentication API to send an EMAIL to an user with a password forget Link
*/
class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    //Handle the event when a user submits the form defined below
    //Uses firebase to "doPasswordReset" defined in 'Firebase/firebase/js'.
    onSubmit = event => {
        const { email } = this.state;
        this.props.firebase
            .doPasswordReset(email)
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
        const { email, error } = this.state;
        const isInvalid = email === '';

        return (
            <form onSubmit={this.onSubmit} className="sign-in-form">
                <input
                    className="input-text"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <button 
                    className="sign-in-btn"
                    disabled={isInvalid} 
                    type="submit">
                    Send Me a Link
                </button>
                {error && <p className="error" >{error.message}</p>}
            </form>
        );
    }
}

//A link is defined to be used for later in another page
const PasswordForgetLink = () => (
    <p className="emphasis-text-bottom">
        <Link 
            to={"/forgot_password"} >
                Forgot Password?
        </Link>
    </p>
);

export default PasswordForgetPage;

//Export with firebase so that there doesnt need to be any more imports where its being used
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

//Made possible here to just export PasswordForgetForm and PasswordForgetLink
export { PasswordForgetForm, PasswordForgetLink };