import React from 'react';
import './Calendar.css';
import ButtonRedirect from '../ButtonRedirect/ButtonRedirect';

export default function Calendar() {
    return (
        <div className="container">
            <h2 className="calendar-title">Calendario de partidos</h2>
            <div className="d-flex flex-row justify-content-center">
                <button type="button" className="calendar" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <img src="./assets/img/calendario.png" alt="Descarga acá tu fixture" className="img-fluid"/>
                </button>
            </div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">x</button>
                        </div>
                        <div className="modal-body">
                            <img src="./assets/img/calendario.png" alt="Descarga acá tu fixture" className="img-fluid"/>
                        </div>
                        <div className="modal-footer">
                            <a className="calendar-caption" href="https://assets-production.applicaster.com/static/copa_america/pdf/ES-CA2021-JUN-FINAL.pdf"  rel="noreferrer noopener" target="_blank">Descarga acá tu fixture</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end my-5">
                <ButtonRedirect/>
            </div>
        </div>
    )
}
