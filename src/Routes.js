import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Index from './components/Index';
import Admin from './components/Admin';

const Routes = () => (
    <Switch>
        <Route path='/' exact component={Index}/>
        <Route path='/admin' exact component={Admin}/>
    </Switch>
);

export default Routes;
