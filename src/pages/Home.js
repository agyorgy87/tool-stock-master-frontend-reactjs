import React from 'react';
//import { useNavigate } from 'react-router-dom';
import LoginForm from "../components/LoginForm.js";

const Home = () => {

    //const navigate = useNavigate();

    return (
        <div className="d-flex justify-content-center flex-column">
                <div className="d-flex justify-content-center mt-5">
                    <LoginForm />
                </div>
           {/*<button className="" onClick={() => navigate("/newtool")} size="md">New tool</button> */}
        </div>
    )
}

export default Home;