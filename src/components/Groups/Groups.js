import React from 'react';
import './Groups.css';
import Countries from '../Countries/Countries';

export default function Groups({group}) {
    return (
        <div className="mt-5 mb-5">
            <h2 className="group-title">{group.name}</h2>
            <div className="card-group">
                { group.paises.map(pais => 
                    (
                        <Countries key={ Math.random().toString(36).substr(2, 9) } country={pais}/>
                    )
                )}
            </div>
        </div>
    )
}