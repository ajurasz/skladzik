import React from 'react';
import {Card, Divider} from 'semantic-ui-react';

const Item = ({name, price, mine}) => (
    <Card fluid={true}>
        <Card.Content textAlign='center'>
            <Card.Header className='item-name'>
                <div className=''>{name}</div>
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

export default Item;
