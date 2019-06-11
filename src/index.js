import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import {StateProvider} from './context';
import {initialState, reducer} from './reducer';

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App/>
    </StateProvider>, document.getElementById('root'));

if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    ReactGA.pageview(window.location.pathname);
}
