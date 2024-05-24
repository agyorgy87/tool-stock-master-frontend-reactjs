import {useEffect, useState} from 'react';
import axios from 'axios';
import NavigationBar from '../components/NavigationBar';
import { useParams } from 'react-router-dom';

const EditTool = () => {

    const [editData, setEditData] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8080/tools/" + id)
        .then(response => {
            setEditData(response.data)
            console.log('success', response);
        })
        .catch(error => {
          console.error('error:', error);
        });
    }, []);


    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setEditData({
            ...editData,
            [id]: value
        });
    };

    
    const updateTool = () => {
        axios.put(`http://localhost:8080/updatetool/${id}`, editData)
          .then(response => {
            console.log('success', response)
          }).catch(error => {
            console.error('error:', error);
          });
    };

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
                        id="productId"
                        value={editData.productId}
                        onChange={handleInputChange}
                        />
                            <label htmlFor="productId">Product ID</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                        className="form-control" 
                        id="company"
                        value={editData.company}
                        onChange={handleInputChange}
                        />
                            <label htmlFor="company">Company</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                        className="form-control" 
                        id="toolName"
                        value={editData.toolName}
                        onChange={handleInputChange}
                        />
                            <label htmlFor="toolName">Tool Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                        className="form-control" 
                        id="quantity"
                        value={editData.quantity}
                        onChange={handleInputChange}
                        />
                            <label htmlFor="quantity">Quantity</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                        className="form-control" 
                        id="price"
                        value={editData.price}
                        onChange={handleInputChange}
                        />
                            <label htmlFor="price">Price/net</label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-success" onClick={updateTool}>
                            Save Tool
                        </button>
                    </div>
                </div> 
            </div>
    </div>
  )
}

export default EditTool;