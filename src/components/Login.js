import React from 'react';
import { Button } from '@material-ui/core';

import './Login.css';

function Login() {
    return (
        <div className="login">
            <div className="login__container">
                <img src="./logo.png" alt="Logo" />
                <h1>Sign in to WRI Main Room</h1>
                <p>wri.wrimessageroom.com</p>
                <Button>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login;
