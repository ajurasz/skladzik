import React, {Component} from 'react';
import {Button, Form, Grid, Message} from 'semantic-ui-react';

import {login} from '../../fire';
import {StateContext} from '../../context';

class Login extends Component {
    static contextType = StateContext;

    state = {
        processing: false,
        message: '',
        email: '',
        password: ''
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onLogin = async (dispatch) => {
        const {email, password} = this.state;
        this.setState({processing: true, message: ''});
        const isAuthenticated = await login(email, password);
        if (isAuthenticated) {
            dispatch({
                type: 'LOGGED_IN'
            });
            this.props.history.push('/admin');
        } else {
            this.setState({message: 'Błąd logowania'});
            this.setState({processing: false});
        }
    };

    render() {
        const [, dispatch] = this.context;
        const {email, password, message} = this.state;
        return (
            <Grid>
                <Grid.Column width={3} style={{margin: '0 auto'}}>
                    <Form>
                        <Form.Field>
                            <input
                                placeholder='Email'
                                name='email'
                                value={email}
                                onChange={this.onChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <input
                                placeholder='Hasło'
                                type='password'
                                name='password'
                                value={password}
                                onChange={this.onChange}
                            />
                        </Form.Field>
                        <Button primary type='submit' onClick={this.onLogin.bind(this, dispatch)}>Zaloguj</Button>
                        {message &&
                        <Message negative>
                            <p>{message}</p>
                        </Message>
                        }
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Login;
