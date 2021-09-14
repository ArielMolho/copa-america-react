import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div>
            <div className="d-flex flex-row justify-content-center mt-4 mb-4">
                <img src="./assets/img/copa-america-logo-vertical.png" className="header-logo mx-auto" alt="Copa America"/>
            </div>
            <h2 className="home-title">Cuidamos el producto</h2>
            <div className="d-flex flex-row justify-content-center mt-4 mb-4">
                <img src="./assets/img/patadaGJ.jpg" className="home-img mx-auto" alt="Cuidamos el producto"/>
            </div>
        </div>
    )
}
