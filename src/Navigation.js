import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home.js";
import Registration from './pages/Registration.js';
import SearchById from './pages/SearchById.js';
import SearchByCompany from './pages/SearchByCompany.js';
import SearchByToolName from './pages/SearchByToolName.js';
import SearchByQuantity from './pages/SearchByQuantity.js';
import SearchByPrice from './pages/SearchByPrice.js';
import AddNewTool from './pages/AddNewTool.js';
import ToolModification from "./pages/ToolModification.js";
import EditTool from './pages/EditTool.js';

const Navigation = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />   
                    <Route path="/registration" element={<Registration/>} />
                    <Route path="/searchbyid" element={<SearchById/>} />
                    <Route path="/searchbycompany" element={<SearchByCompany/>} />
                    <Route path="/searchbytoolname" element={<SearchByToolName/>} />
                    <Route path="/searchbyquantity" element={<SearchByQuantity/>} />
                    <Route path="/searchbyprice" element={<SearchByPrice/>} />
                    <Route path="/addnewtool" element={<AddNewTool/>} />
                    <Route path="/toolmodification" element={<ToolModification/>} />
                    <Route path="/edittool" element={<EditTool/>} />
                </Routes>
            </BrowserRouter>
    </div>
    )
}

export default Navigation;