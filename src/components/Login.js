import React from 'react';

const Login = () => {

    return(
        <form>
            <h1 className="d-flex justify-content-center">Tool Stock Master</h1>
            <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="InputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword1"/>
            </div>
            <div className="d-flex justify-content-center flex-column">
                <button className="btn btn-primary mb-3">Login</button>
                <button className="btn btn-primary">Registration</button>
            </div>
            
        </form>
    )
}

export default Login;