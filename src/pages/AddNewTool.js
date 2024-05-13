import React, { useState }  from 'react';
import axios from 'axios';

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
        <div className="App d-flex justify-content-center flex-column">
            <h3>toolstockmaster - TSM </h3>
                <div className="addToolsForm d-flex d-flex justify-content-center flex-column">
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
                    <button className="btn btn-success" onClick={handleSubmit}
                    >Accept</button>
                </div>   
        </div>
    );
}

export default AddNewTool;