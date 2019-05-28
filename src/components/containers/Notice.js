import React from 'react';
import {Grid, Message} from 'semantic-ui-react';

const Notice = () => (
    <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
            <Grid.Column width={16}>
                <Message
                    color='blue'
                    icon='bullhorn'
                    size='massive'
                    header='Prowadzimy sprzedaż ratalną'
                    style={{textAlign: 'center'}}
                />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default Notice;
