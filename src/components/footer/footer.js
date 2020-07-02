import React from "react";
import { Link } from 'react-router-dom';

import './footer.css';
import logo from '../../images/logo.png';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo(0,0);
    };

    return (
        <div className='footer'>
            <div className="footer__line" />

            <div className="footer__content">
                <div className="footer__content_left">
                    <Link to='/' onClick={scrollToTop}>
                        <img className='footer__logo' src={logo} alt="logo"/>
                    </Link>
                    <p className='footer__text'>Московская область, г. Долгопрудный, Проспект мира, дом 3Б</p>
                </div>

                <p>+7 (112) 358 1321/34</p>
            </div>
        </div>
    )
};

export default Footer;
