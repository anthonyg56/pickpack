import React from 'react';
import Login from './Login';
import Register from './Register';
import { Route } from 'react-router-dom';

export const Auth = () => 
    <div className="Auth">
        <Route path="/auth/login" component={props => <Login {...props} />} />
        <Route path="/auth/register" component={props => <Register {...props} />}/>
    </div>