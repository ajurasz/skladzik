import React from 'react';
import {Card, Divider, Icon, Popup} from 'semantic-ui-react';

const Coal = ({name, price, mine, isEditable}) => (
    <Card fluid={true}>
        <Card.Content textAlign='center'>
            <Card.Header className='item-name'>
                <div className=''>{name}</div>
                {isEditable &&
                <Popup
                    trigger={<Icon name='edit'/>}
                    content='Edytuj'
                    position='top center'
                />
                }
            </Card.Header>
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
