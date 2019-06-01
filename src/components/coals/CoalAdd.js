import React from 'react';
import {Button, Grid} from 'semantic-ui-react';

import {useStateValue} from '../../context';

const CoalAdd = () => {

    const [, dispatch] = useStateValue();

    const onClick = () => {
        dispatch({
            type: 'OPEN_COAL_FORM',
            data: {
                id: undefined,
                name: '',
                price: '',
                mine: '',
                show: true
            }
        });
    };

    return (
        <Grid>
            <Grid.Column textAlign="center">
                <Button primary onClick={onClick}>Dodaj</Button>
            </Grid.Column>
        </Grid>
    );
};

export default CoalAdd;