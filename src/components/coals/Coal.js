import React from 'react';
import {Card, Divider, Icon, Popup} from 'semantic-ui-react';

const Coal = ({name, price, mine, show, isEditable}) => (
    <Card fluid={true}>
        <Card.Content textAlign='center'>
            <Card.Header className='item-name'>
                {name}
            </Card.Header>
            {isEditable &&
            <React.Fragment>
                <Divider/>
                <Card.Header>
                    {show ? <Icon name='eye'/> : <Icon name='eye slash'/>}
                    <Popup
                        trigger={<Icon name='edit' style={{ marginLeft: '1em'}}/>}
                        content='Edytuj'
                        position='top center'
                    />
                </Card.Header>
            </React.Fragment>
            }
            <Divider/>
            <Card.Description className='item-price'>
                <h2>{price} PLN</h2>
                <span>tona</span>
            </Card.Description>
            <Divider/>
            Kopalnia <strong>{mine}</strong>
        </Card.Content>
    </Card>
);

export default Coal;
