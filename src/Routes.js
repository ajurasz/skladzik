import React from 'react';
import {Route, Switch} from 'react-router-dom';

import AuthRoute from './components/auth/AuthRoute';
import Login from './components/login/Login';
import Index from './components/Index';
import Admin from './components/Admin';

const Routes = () => (
    <Switch>
        <Route path='/' exact component={Index}/>
        <Route path='/login' exact component={Login}/>
        <AuthRoute path='/admin' exact component={Admin}/>
    </Switch>
);

export default Routes;
