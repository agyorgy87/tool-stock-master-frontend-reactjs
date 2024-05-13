import React from 'react';
//import { useNavigate } from 'react-router-dom';
import Login from "../components/Login.js";

const Home = () => {

    //const navigate = useNavigate();

    return (
        <div className="d-flex justify-content-center flex-column">
                <div className="d-flex justify-content-center mt-5">
                    <Login />
                </div>
           {/*<button className="" onClick={() => navigate("/newtool")} size="md">New tool</button> */}
        </div>
    )
}

export default Home;