import React from 'react';
import {Container, Grid, Header, Icon, Segment} from 'semantic-ui-react';

const Footer = () => (
    <Segment inverted vertical style={{padding: '5em 0em'}}>
        <Container text>
            <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Header as='h4' inverted>
                            Adres
                        </Header>
                        <p>
                            {process.env.REACT_APP_CONTACT_ADDRESS_STREET} {process.env.REACT_APP_CONTACT_ADDRESS_NUMBER}
                            <br/>
                            {process.env.REACT_APP_CONTACT_ADDRESS_POST_CODE}, {process.env.REACT_APP_CONTACT_ADDRESS_CITY}
                        </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header as='h4' inverted>
                            Kontakt
                        </Header>
                        <p>
                            <Icon name='phone'/>{process.env.REACT_APP_CONTACT_PHONE} <br/>
                            <Icon name='envelope open'/>{process.env.REACT_APP_CONTACT_EMAIL}
                        </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Header as='h4' inverted>
                            Godziny otwarcia
                        </Header>
                        <p>
                            Pn-Pt 08:00 - 16:00<br/>
                            Sb 08:00 - 13:00
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
);

export default Footer;
