import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home.js";
import SearchById from './pages/SearchById.js';
import AddNewTool from './pages/AddNewTool.js';
import ToolModification from "./pages/ToolModification.js";

const Navigation = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />   
                    <Route path="/searchbyid" element={<SearchById/>} />
                    <Route path="/addnewtool" element={<AddNewTool/>} />
                    <Route path="/toolmodification" element={<ToolModification/>} />
                </Routes>
            </BrowserRouter>
    </div>
    )
}

export default Navigation;