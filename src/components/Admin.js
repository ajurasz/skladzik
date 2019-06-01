import React, {useEffect} from 'react';

import {useStateValue} from '../context';
import {dbRef} from '../fire';
import Coals from './coals/Coals';

const Admin = () => {
    const [, dispatch] = useStateValue();

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
            <Coals/>
        </React.Fragment>
    );
};

export default Admin;
