import React from 'react';
import axios from 'axios';
import NavigationBar from '../components/NavigationBar';

const EditTool = () => {
  return (
    <div>
        <div>
            <NavigationBar/>
        </div>
        <div className="d-flex justify-content-center mt-5">
            <h1>Edit tool</h1>
        </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="add-new-tool-container">
                    <div className="form-floating mb-3">
                        <input 
                        className="form-control" 
                        id="productId" //same id-s -> addnewtool 
                        />
                            <label htmlFor="productId">Product ID</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                        className="form-control" 
                        id="company"
                        />
                            <label htmlFor="company">Company</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                        className="form-control" 
                        id="toolName"
                        />
                            <label htmlFor="toolName">Tool Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                        className="form-control" 
                        id="quantity"
                        />
                            <label htmlFor="quantity">Quantity</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                        className="form-control" 
                        id="price"
                        />
                            <label htmlFor="price">Price/net</label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-success" >
                            Save Tool
                        </button>
                    </div>
                </div> 
            </div>
    </div>
  )
}

export default EditTool;