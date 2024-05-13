import React, { useState }  from 'react';
import "../css/AddNewTool.css";
import axios from 'axios';
import NavigationBar from '../components/NavigationBar';

const AddNewTool = () => {

    const [inputValues, setInputValues] = useState ({ // SAME AS IN JAVA
        productId: "",
        company: "",
        toolName: "",
        quantity: 0,
        price: 0
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:4000/api/data", inputValues)
          .then(response => {
            console.log('success', response);
            setInputValues({
                productId: "",
                company: "",
                toolName: "",
                quantity: 0,
                price: 0
            });
          })
          .catch(error => {
            console.error('error:', error);
          });
      };

    return (
        <div>
            <div>
                <NavigationBar/>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <h1>New Tool</h1>
            </div>
                <div className="d-flex justify-content-center mt-5">
                    <div className="add-new-tool-container">
                        <div className="form-floating mb-3">
                            <input 
                            className="form-control" 
                            id="productId" 
                            value={inputValues.productId}
                            onChange={handleInputChange}
                            placeholder=""/>
                            <label htmlFor="productId">Product ID</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input 
                            className="form-control" 
                            id="company"
                            value={inputValues.company} 
                            onChange={handleInputChange}
                            placeholder=""/>
                            <label htmlFor="company">Company</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input 
                            className="form-control" 
                            id="toolName"
                            value={inputValues.toolName}
                            onChange={handleInputChange}
                            placeholder=""/>
                            <label htmlFor="toolName">Tool Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input 
                            className="form-control" 
                            id="quantity"
                            value={inputValues.quantity} 
                            onChange={handleInputChange}
                            placeholder=""/>
                            <label htmlFor="quantity">Quantity</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input 
                            className="form-control" 
                            id="price"
                            value={inputValues.price} 
                            onChange={handleInputChange}
                            placeholder=""/>
                            <label htmlFor="price">Price/net</label>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-success" onClick={handleSubmit}>
                                Save Tool
                            </button>
                        </div>
                    </div> 
                </div>  
        </div>
    );
}
export default AddNewTool;