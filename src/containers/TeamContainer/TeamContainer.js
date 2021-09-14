import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './TeamContainer.css';
import ButtonRedirect from '../../components/ButtonRedirect/ButtonRedirect';

const { getCountries } = require('../../services/postService');

export default function TeamContainer() {
    let {paisId} = useParams();

    const [country, setCountry] = useState([]);

    useEffect(() => {
        getCountries()
            .then(res => {
                var country = res.dataPaises[paisId-1]
                country.partidos = [];
                for (let m = 0; m < res.dataPartidos.length; m++) {
                    let match = res.dataPartidos[m];
                    if (match.paisid === country.id) {
                        country.partidos.push(match)
                    }
                }
                setCountry(country)
            });
    }, [paisId]);

    function date(date){
        let correctDate = new Date(date);
        const month = correctDate.toLocaleDateString('es-ES', { month: 'long' });
        let dateMD = `${correctDate.getDate()}-${month}`;
        return dateMD
    }

    return (
        <div className="container">
            { country && 
                <div className="card mb-3 mx-auto" style={{maxWidth: "540px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={country.escudo} className="img-fluid rounded-start team-image" alt={country.name} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title team-title">{country.name}</h5>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Jornada</th>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Rival</th>
                                            <th scope="col">Horario</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { country.partidos &&
                                        country.partidos.map(match => {
                                            return (
                                                <tr key={ Math.random().toString(36).substr(2, 9) }>
                                                    <th scope="row">{match.jornada}</th>
                                                    <td>{date(match.fecha)}</td>
                                                    <td>{match.rival}</td>
                                                    <td>{match.horario}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className="d-flex justify-content-end my-5">
                <ButtonRedirect/>
            </div>
        </div>
    )
}