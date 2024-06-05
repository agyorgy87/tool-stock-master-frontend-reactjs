import {useState, useEffect} from 'react';
import "../css/ModificationTable.css";
import { useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md"; 
import { FaRegEdit } from "react-icons/fa";
import axios from 'axios';


const ModificationTable = () => {

    let navigate = useNavigate();

    const [allData, setAllData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/all-tools")
        .then(response => {
            setAllData(response.data);
            console.log('success', response);
        })
        .catch(error => {
          console.error('error:', error);
        });
    }, []);

    const deleteTool = (id) => {
        axios.delete(`http://localhost:8080/delete-tool/${id}`)
          .then(response => {
            let newList = [...allData];
            newList = newList.filter((tool) => tool.id !== id);
            setAllData(newList);
          })
          .catch(error => {
            console.error('error:', error);
          });
    }
  
    return (
        <div className="modification-table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product ID</th>
                        <th scope="col">Company</th>
                        <th scope="col">Tool Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
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
                                <button onClick={() => navigate("/edit-tool/" + tool.id)}>
                                    <FaRegEdit/>
                                </button>
                                <button onClick={() => deleteTool(tool.id)}>
                                    <MdDeleteOutline/>
                                </button>
                            </tr>
                        );
                    })}
                </tbody> 
            </table>
        </div>
  )


}

export default ModificationTable