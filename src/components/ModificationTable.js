import React from 'react';
import "../css/ModificationTable.css";
import { useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md"; 
import { FaRegEdit } from "react-icons/fa";

const ModificationTable = () => {

    let navigate = useNavigate(); 
  
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
                    {/* 
                    {example.map((tool, index) => {
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
                        */}
                    <tr>
                        <td>1</td>
                        <td>2</td>                
                        <td>3</td>                
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>
                            <button onClick={() => navigate("/edittool")}>
                                <FaRegEdit/>{/* NEW FORM OR ENOUGH ADDNEWTOOL FORM TO EDIT? */}
                            </button>
                            </td>
                        <td>
                            <button>
                                <MdDeleteOutline/>
                            </button>
                        </td>
                    </tr>
                </tbody> 
            </table>
        </div>
  )


}

export default ModificationTable