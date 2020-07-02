import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';

import './app.css';
import Header from "../header";
import SideBar from "../side-bar";
import MainContent from "../main-content";
import Footer from "../footer";
import Instruction from "../instruction";

const App = () => {

    return (
        <BrowserRouter>
            <div className='app'>
                <Header/>

                <div className='pink-block'/>

                <div className='app__content'>
                    <SideBar/>
                    <Route path='/' exact component={MainContent}/>
                    <Route path='/pharma-test' exact component={MainContent}/>
                    <Route path='/instruction' exact component={Instruction}/>
                </div>

                <Footer/>
            </div>
        </BrowserRouter>
    )
};

export default App;
