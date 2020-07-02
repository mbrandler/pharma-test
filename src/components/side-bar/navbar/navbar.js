import React, { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './navbar.css';

const Navbar = ({menu}) => {

    const [activeId, setState] = useState(0);

    const [coordinates] = useState({
        x: 0,
        y: 0
    });

    const handleScroll = (event) => {
        const appContent = document.querySelector('.app__content');

        coordinates.y = parseInt(window.getComputedStyle(appContent).top) + parseInt(window.getComputedStyle(appContent).marginTop);
        coordinates.x = appContent.lastChild.getBoundingClientRect().x;

        const currentElement = document.elementFromPoint(coordinates.x, coordinates.y);
        const id = currentElement.id.substr(5)-1;

        if (id >= 0) onActiveLink(event, id);
    };

    window.addEventListener('scroll', handleScroll);

    const onActiveLink = (event, index) => {
        document.getElementById(index).childNodes.forEach(child =>
            child.classList.add('anchor_active')
        );
        if (index !== activeId){
            document.getElementById(activeId).childNodes.forEach(child => {
                child.classList.remove('anchor_active')
            })
        }
        setState(index);
    };

    const links = menu.map((point, index) => {
        return (
            <li key={index} id={index}>
                <span className='navbar__number'>{index+1}. </span>
                <AnchorLink
                    offset={() => 80}
                    className='anchor'
                    href={'#card-' + (index + 1)}
                    onClick={(event) => onActiveLink(event, index)}
                >
                    {point}
                </AnchorLink>
            </li>
        )
    });

    return (
        <div className='navbar'>
            <p className='navbar__title'>Содержание статьи:</p>
            <ul className='navbar__list'>
                {links}
            </ul>
        </div>
    )
};

export default Navbar;
