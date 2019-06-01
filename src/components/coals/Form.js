import React, {Component} from 'react';
import {Button, Modal} from 'semantic-ui-react';

import {StateContext} from '../../context';

class Form extends Component {
    state = {open: true};

    close = (dispatch) => {
        this.setState({open: false});
        dispatch({type: 'CLOSE_COAL_FORM'})
    };

    render() {
        const {open} = this.state;
        return (
            <StateContext.Consumer>
                {([state, dispatch]) => {
                    return (
                        <Modal size='small' open={open} onClose={this.close.bind(this, dispatch)} closeIcon>
                            <Modal.Header>Create or Edit</Modal.Header>
                            <Modal.Content>
                                <p>Create or Edit</p>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button negative>Anuluj</Button>
                                <Button positive icon='checkmark' labelPosition='right' content='Zapisz'/>
                            </Modal.Actions>
                        </Modal>
                    );
                }
                }
            </StateContext.Consumer>

        );
    };
}

export default Form;
