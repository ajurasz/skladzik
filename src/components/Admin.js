import React, {useEffect} from 'react';

import {useStateValue} from '../context';
import {dbRef} from '../fire';
import Coals from './coals/Coals';
import Form from './coals/Form';

const Admin = () => {
    const [{coalForm}, dispatch] = useStateValue();

    useEffect(() => {
        dispatch({
            type: 'LOADED_USER',
            user: {}
        });
        dispatch({
            type: 'LOAD_COALS'
        });
        dbRef.onSnapshot((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            dispatch({
                type: 'LOADED_COALS',
                data
            });
        });
    }, [dispatch]);

    return (
        <React.Fragment>
            {coalForm && <Form/>}
            <Coals/>
        </React.Fragment>
    );
};

export default Admin;
