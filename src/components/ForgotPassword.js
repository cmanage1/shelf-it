/*
Author: Chethin Manage
Credit to: https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from './Firebase';

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

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

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

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

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

const PasswordForgetLink = () => (
    <p className="emphasis-text-bottom">
        <Link 
            
            to={"/forgot_password"} >
                Forgot Password?
        </Link>
    </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };