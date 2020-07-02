import React from "react";
import { Link } from 'react-router-dom';

import './instruction-btn.css';

const InstructionBtn = () => {

    return (
        <Link to='/instruction'>
            <button className='instruction-btn'>
                <p className='instruction-btn__text'>Инструкция по «Нашему лекарству»</p>
            </button>
        </Link>
    )
};

export default InstructionBtn;
