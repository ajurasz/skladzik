import React, {Component} from 'react';
import {Button, Form, Modal, Radio} from 'semantic-ui-react';

import {StateContext} from '../../context';
import {fetch, update} from '../../fire';

class CoalForm extends Component {
    state = {
        open: true,
        processing: false,
        form: undefined
    };

    onClose = (dispatch) => {
        this.setState({open: false});
        dispatch({type: 'CLOSE_COAL_FORM'});
    };

    onChange = (dispatch, e) => {
        dispatch({
            type: 'UPDATE_COAL_FORM',
            data: {
                [e.target.name]: e.target.value
            }
        })
    };

    toggleShow = (show, dispatch) => {
        dispatch({
            type: 'UPDATE_COAL_FORM',
            data: {
                show: !show
            }
        })
    };

    onSave = async (form, dispatch) => {
        try {
            this.setState({processing: true});
            await update(form);
            dispatch({
                type: 'LOADED_COALS',
                data: await fetch()
            });
            this.onClose(dispatch);
        } catch (e) {
            this.setState({processing: false});
            console.log(e.message);
        }
    };

    render() {
        const {open, processing} = this.state;
        return (
            <StateContext.Consumer>
                {([state, dispatch]) => {
                    const {id, name, price, mine, show} = state.coalForm;
                    return (
                        <Modal size='small' open={open} onClose={this.onClose.bind(this, dispatch)} closeIcon>
                            <Modal.Header>{id ? 'Edytuj' : 'Utwórz'}</Modal.Header>
                            <Modal.Content>
                                <Form>
                                    <Form.Field>
                                        <label>Nazwa</label>
                                        <input
                                            placeholder='Nazwa'
                                            name='name'
                                            value={name}
                                            onChange={this.onChange.bind(this, dispatch)}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Cena</label>
                                        <input
                                            placeholder='Cena'
                                            type='number'
                                            step='0.01'
                                            name='price'
                                            value={price}
                                            onChange={this.onChange.bind(this, dispatch)}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Kopalnia</label>
                                        <input
                                            placeholder='Kopalnia'
                                            value={mine}
                                            name='mine'
                                            onChange={this.onChange.bind(this, dispatch)}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Pokaż</label>
                                        <Radio
                                            toggle
                                            defaultChecked={show}
                                            onChange={this.toggleShow.bind(this, show, dispatch)}
                                        />
                                    </Form.Field>
                                </Form>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button
                                    negative
                                    onClick={this.onClose.bind(this, dispatch)}
                                >Anuluj</Button>
                                <Button
                                    positive
                                    icon='checkmark'
                                    labelPosition='right'
                                    content='Zapisz'
                                    disabled={processing}
                                    onClick={this.onSave.bind(this, state.coalForm, dispatch)}
                                />
                            </Modal.Actions>
                        </Modal>
                    );
                }}
            </StateContext.Consumer>

        );
    };
}

export default CoalForm;
