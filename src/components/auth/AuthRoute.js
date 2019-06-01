import React from 'react';
import {Redirect, Route} from 'react-router-dom';

import {useStateValue} from '../../context';

const AuthRoute = ({component: Component, ...rest}) => {
    const [{isAuthenticated}] = useStateValue();
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />}
        />
    );
};

export default AuthRoute;
