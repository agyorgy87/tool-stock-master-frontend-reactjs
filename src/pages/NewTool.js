import '../css/NewTool.css';
import React, { useState }  from 'react';
import axios from 'axios';

const NewTool = () => {

    const [inputValues, setInputValues] = useState ({
        articleNumber: "",
        company: "",
        toolName: "",
        quantity: 0,
        priceNet: 0
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
                articleNumber: "",
                company: "",
                toolName: "",
                quantity: 0,
                priceNet: 0
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
                        id="articleNumberInput" 
                        value={inputValues.articleNumber}
                        onChange={handleInputChange}
                        placeholder=""/>
                        <label htmlFor="articleNumberInput">Article Number</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                        className="form-control" 
                        id="companyInput"
                        value={inputValues.company} 
                        onChange={handleInputChange}
                        placeholder=""/>
                        <label htmlFor="companyInput">Company</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                        className="form-control" 
                        id="toolNameInput"
                        value={inputValues.toolName}
                        onChange={handleInputChange}
                        placeholder=""/>
                        <label htmlFor="toolNameInput">Tool name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                        className="form-control" 
                        id="quantityInput"
                        value={inputValues.quantity} 
                        onChange={handleInputChange}
                        placeholder=""/>
                        <label htmlFor="quantityInput">Quantity</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                        className="form-control" 
                        id="priceInput"
                        value={inputValues.priceNet} 
                        onChange={handleInputChange}
                        placeholder=""/>
                        <label htmlFor="priceInput">Price/net</label>
                    </div>
                    <button className="btn btn-success" onClick={handleSubmit}
                    >Accept</button>
                </div>   
        </div>
    );
}

export default NewTool;