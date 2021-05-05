import React from 'react';
import { Button } from '@material-ui/core';

import './Login.css';
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Login() {
    const [state, dispatch] = useStateValue();
    
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => {
                alert(error.message);
            });
    }
    
    return (
        <div className="login">
            <div className="login__container">
                <img src="./logo.png" alt="Logo" />
                <h1>Sign in to WRI Main Room</h1>
                <p>wri.wrimessageroom.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login;
