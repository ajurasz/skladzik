import React from 'react';
import {Container, Header as SHeader, Segment} from 'semantic-ui-react';

const Header = () => (
    <Segment
        className='bg'
        inverted
        textAlign='center'
        style={{minHeight: 300, padding: '1em 0em'}}
        vertical
    >
        <Container>
            <SHeader
                as='h1'
                content={process.env.REACT_APP_TITLE}
                inverted
                style={{
                    fontSize: '4em',
                    fontWeight: 'bold',
                    marginBottom: 0,
                    marginTop: '1.5em',
                }}
            />
            <SHeader
                as='h2'
                content={process.env.REACT_APP_FULL_ADDRESS}
                inverted
                style={{
                    fontSize: '1.7em',
                    fontWeight: 'normal',
                    marginTop: '1.5em',
                }}
            />
        </Container>
    </Segment>
);

export default Header;
