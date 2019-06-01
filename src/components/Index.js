import React, {useEffect} from 'react';

import {useStateValue} from '../context';
import {dbRef} from '../fire';
import Coals from './coals/Coals';
import Notice from './notice/Notice';

const Index = () => {
    const [, dispatch] = useStateValue();

    useEffect(() => {
        dispatch({
            type: 'LOAD_COALS'
        });
        dbRef.where('show', '==', true).onSnapshot((snapshot) => {
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
            <Notice/>
            <Coals/>
        </React.Fragment>
    );
};

export default Index;
