import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import 'semantic-ui-css/semantic.min.css';
import App from './App';

ReactDOM.render(<App/>, document.getElementById('root'));

if (process.env.NODE_ENV === 'prod') {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    ReactGA.pageview(window.location.pathname);
}
