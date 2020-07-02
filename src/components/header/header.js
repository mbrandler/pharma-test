import React from "react";
import { Link } from 'react-router-dom';

import './header.css';
import SignUp from "./sign-up/sign-up";

import logo from "../../images/logo.png";

const Header = () => {

    const scrollToTop = () => {
        window.scrollTo(0,0);
    };

    return (
        <div className='header'>
            <div className="header__container">
                <div className="header__logo">
                    <Link to='/' onClick={scrollToTop}>
                        <img className='header__logo_img' src={logo} alt="logo"/>
                    </Link>
                </div>

                <div className="header__text">
                    <p>Хотите получать больше интересных  материалов по этой и другим темам?</p>
                </div>

                <SignUp />
            </div>
        </div>
    )
};

export default Header;
