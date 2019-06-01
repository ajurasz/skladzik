import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Responsive, Segment} from 'semantic-ui-react';

import './App.css';
import Map from './components/map/Map';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Routes from './Routes';

const App = () => (
    <Router>
        <div className="App">
            <Responsive>
                <Header/>
                <Segment style={{padding: '1em 0em'}} vertical>
                    <Routes/>
                </Segment>
                <Map/>
                <Footer/>
            </Responsive>
        </div>
    </Router>
);

export default App;
