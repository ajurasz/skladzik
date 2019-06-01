import React from 'react';
import {Grid, Loader} from 'semantic-ui-react';

import {useStateValue} from '../../context';
import Coal from './Coal';

const Coals = () => {
    const [{coals, user}] = useStateValue();
    return (
        <React.Fragment>
            {coals.loading ? (
                <Loader active inline='centered' className='loading-items'/>
            ) : (
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        {coals.data.map((item) => (
                            <Grid.Column key={item.id} width={4} style={{marginBottom: '1em'}}>
                                <Coal isEditable={user} {...item}/>
                            </Grid.Column>
                        ))}
                    </Grid.Row>
                </Grid>
            )}
        </React.Fragment>
    );
};

export default Coals;
