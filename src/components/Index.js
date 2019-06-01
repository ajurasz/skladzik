import React, {useEffect} from 'react';

import {useStateValue} from '../context';
import {fetch} from '../fire';
import Coals from './coals/Coals';
import Notice from './notice/Notice';

const Index = () => {
    const [, dispatch] = useStateValue();

    useEffect(() => {
        dispatch({
            type: 'LOAD_COALS'
        });
        async function fetchData() {
            dispatch({
                type: 'LOADED_COALS',
                data: await fetch(false)
            });
        }
        fetchData();
    }, [dispatch]);

    return (
        <React.Fragment>
            <Notice/>
            <Coals/>
        </React.Fragment>
    );
};

export default Index;
