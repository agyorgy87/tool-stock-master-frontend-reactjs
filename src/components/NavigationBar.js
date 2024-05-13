import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
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
                                    <a className="dropdown-item" href>a</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href>b</a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li>
                                    <a className="dropdown-item" href>c</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href>Add New Tool</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href>Tool Modification</a>
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