import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const NavigationBar = () => {

    let navigate = useNavigate();

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href>Tool Stock Master</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Search By
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to={"/searchbyid"} className="dropdown-item">Search by ID</Link>
                                    </li>
                                    <li>
                                        <Link to={"/searchbycompany"} className="dropdown-item">Search by Company</Link>
                                    </li>
                                    <li>
                                        <Link to={"/searchbytoolname"} className="dropdown-item">Search by Tool Name</Link>
                                    </li>
                                    <li>
                                        <Link to={"/searchbyquantity"} className="dropdown-item">Search by Quantity</Link>
                                    </li>
                                    <li>
                                        <Link to={"/searchbyprice"} className="dropdown-item">Search by Price</Link>
                                    </li>
                                    <li> 
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href>x</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to={"/addnewtool"} className="nav-link" href>Add New Tool</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/toolmodification"} className="nav-link" href>Tool Modification</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-success" type="submit">Login/Logout</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar