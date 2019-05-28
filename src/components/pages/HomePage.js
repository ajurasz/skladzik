import React from 'react';
import {Responsive, Segment} from 'semantic-ui-react';

import ItemsList from '../containers/ItemsList';
import Map from '../containers/Map';
import Notice from '../containers/Notice';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const HomePage = () => (
    <Responsive>
        <Header/>
        <Segment style={{padding: '1em 0em'}} vertical>
            <Notice/>
            <ItemsList/>
        </Segment>
        <Map/>
        <Footer/>
    </Responsive>
);

export default HomePage;
