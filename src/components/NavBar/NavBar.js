import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">
                    <img src="./assets/img/corrupbol.png" alt="Logo" width="70" height="70" className="d-inline-block align-text-center" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/grupos">Grupos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/calendario">Calendario</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/commentarios">Comentá</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}