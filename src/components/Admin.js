import React, {useEffect} from 'react';

import {useStateValue} from '../context';
import {fetch} from '../fire';
import Coals from './coals/Coals';
import CoalForm from './coals/CoalForm';
import CoalAdd from './coals/CoalAdd';

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
        async function fetchData() {
            dispatch({
                type: 'LOADED_COALS',
                data: await fetch()
            });
        }
        fetchData();
    }, [dispatch]);

    return (
        <React.Fragment>
            {coalForm && <CoalForm/>}
            <CoalAdd/>
            <Coals/>
        </React.Fragment>
    );
};

export default Admin;
