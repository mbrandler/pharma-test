import React from "react";
import { withRouter } from 'react-router-dom';

import './side-bar.css';
import Navbar from "./navbar";
import InfoBtn from "./info-btn";

const SideBar = ( { history }) => {

    const navBars = {
        '/': ['Опасность остеопороза',
            'Группа и факторы риска',
            'Симптомы и проявления',
            'Типы остеопороза',
            'Диагностика',
            'Профилактика и лечение',
            'Препараты',
            'Побочные эффекты и их устранение',
            'Золедронаты',
            'Дозировка',
            'Эффективность',
            'Длительность лечения',
            'Удобство использования'],

        '/instruction': ['Состав',
            'Фармакологическое действие',
            'Показания к применению',
            'Противопоказания',
            'Способ применения и дозы',
            'Инструкция по приготовлению раствора',
            'Побочное действие',
            'Передозировка',
            'Взаимодействие с другими лекарственными средствами',
            'Особые указания',
            'Влияние на способность управлять автомобилем и другими механизмами',
            'Форма выпуска',
            'Условия хранения',
            'Срок годности',
            'Условия отпуска']
    };

    navBars['/pharma-test'] = navBars['/']; // для gh-pages

    const path = history.location.pathname;

    return (
        <div className='side-bar'>
            <Navbar menu={navBars[path]}/>
            <InfoBtn />
        </div>
    )
};

export default withRouter(SideBar);
