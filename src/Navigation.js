import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home.js";
import NewTool from './pages/NewTool.js';

const Navigation = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />   
                    <Route path="/newtool" element={<NewTool/>} />       
                </Routes>
            </BrowserRouter>
    </div>
    )
}

export default Navigation;