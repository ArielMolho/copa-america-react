import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer id="redes">
            <div className="row flex-footer">
                <div className="footer-container-logo col-sm-6">
                    <img className="footer-logo" src="./assets/img/copa-america-logo-horizontal.png" alt="Logo Copa America" />
                </div>
                <div className="footer-container-icons col-sm-6">
                    <ul className="social-media-icons-container col-sm-10">
                        <li className="nolist"><a href="http://s.kw.ai/Ko8MA1FF" target="_blank" rel="noopener noreferrer"><img src="./assets/icons/kwai.png" className="icons" alt="Kwai" /></a></li>
                        <li className="nolist"><a href="https://www.facebook.com/CopaAmerica/" target="_blank" rel="noopener noreferrer"><img src="./assets/icons/facebook.png" className="icons" alt="Facebook" /></a></li>
                        <li className="nolist"><a href="https://twitter.com/copaamerica" target="_blank" rel="noopener noreferrer"><img src="./assets/icons/twitter.png" className="icons" alt="Twitter" /></a></li>
                        <li className="nolist"><a href="https://www.instagram.com/copaamerica/" target="_blank" rel="noopener noreferrer"><img src="./assets/icons/instagram.png" className="icons" alt="Instagram" /></a></li>
                        <li className="nolist"><a href="https://www.youtube.com/copaamerica" target="_blank" rel="noopener noreferrer"><img src="./assets/icons/youtube.png" className="icons" alt="YouTube" /></a></li>
                    </ul>
                </div> 
            </div>
        </footer>
    )
}
