import { useState, useEffect } from 'react';
import NavigationBar from '../components/NavigationBar.js';
import axios from 'axios';

const AllTools = () => {

    const [allData, setAllData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/alltools")
        .then(response => {
            setAllData(response.data);
            console.log('success', response);
        })
        .catch(error => {
          console.error('error:', error);
        });
    }, []);

  return (
    <div>
        <div>
            <NavigationBar/>
        </div>
        <div className="result-table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product ID</th>
                        <th scope="col">Company</th>
                        <th scope="col">Tool Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody> 
                    {allData.map((tool, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{tool.productId}</td>                
                                <td>{tool.company}</td>                
                                <td>{tool.toolName}</td>
                                <td>{tool.quantity}</td>
                                <td>{tool.price}</td>
                            </tr>
                        );
                        })}             
                </tbody> 
            </table>
        </div>
    </div>
  )
}

export default AllTools