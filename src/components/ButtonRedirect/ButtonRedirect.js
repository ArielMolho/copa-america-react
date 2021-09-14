import React from 'react';
import {useHistory} from 'react-router-dom';

export default function ButtonRedirect() {
    let history = useHistory();
    return (
        <>
            <button type="button" className="btn btn-info" onClick={() => history.push(`/grupos`)}>Grupos</button>
        </>
    )
}