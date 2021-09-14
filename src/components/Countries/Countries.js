import React from 'react'
import {useHistory} from 'react-router-dom';
import './Countries.css';

export default function Countries({country}) {
    let history = useHistory();
    return (
        <div className="card">
            <button className="country-button mx-auto" onClick={() => history.push(`/equipos/${country.id}`)}>
                <img src={country.escudo} className="img-fluid" alt={country.name} />
            </button>
        </div>
    )
}
