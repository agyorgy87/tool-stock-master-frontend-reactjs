import React from 'react';

const Registration = () => {
  
    return (
        <div className="d-flex justify-content-center mt-5">
            <form>
                <h1 className="d-flex justify-content-center">Tool Stock Master - Registration</h1>
                    <div className="mb-3">
                        <label htmlFor="inputUserName" className="form-label">Username:</label>
                        <input type="text" className="form-control" id="inputUserName" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email address:</label>
                        <input type="text" className="form-control" id="inputEmail" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputPassword" className="form-label">Password:</label>
                        <input type="password" className="form-control" id="inputPassword"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputPasswordAgain" className="form-label">Password again:</label>
                        <input type="password" className="form-control" id="inputPasswordAgain"/>
                    </div>
                    <div className="d-flex justify-content-center mb-3">
                        <button className="btn btn-primary">Registration</button>
                    </div>
            </form>
        </div>               
    )
}

export default Registration