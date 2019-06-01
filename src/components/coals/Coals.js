import React, {Component} from 'react';
import {Grid, Loader} from 'semantic-ui-react';

import {dbRef} from '../../fire';
import Coal from './Coal';

class Coals extends Component {
    state = {
        loading: true,
        items: []
    };

    componentWillMount() {
        this.itemsSubscription = dbRef.where('show', '==', true).onSnapshot((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));

            this.setState({
                loading: false,
                items: [...data]
            });
        });
    }

    componentWillUnmount() {
        this.itemsSubscription.unsubscribe();
    }

    render() {
        return (
            <React.Fragment>
                {this.state.loading ? (
                    <Loader active inline='centered' className='loading-items'/>
                ) : (
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            {this.state.items.map((item) => (
                                <Grid.Column key={item.id} width={4} style={{marginBottom: '1em'}}>
                                    <Coal {...item}/>
                                </Grid.Column>
                            ))}
                        </Grid.Row>
                    </Grid>
                )}
            </React.Fragment>
        );
    }
}

export default Coals;
