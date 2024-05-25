import React from 'react';
import "../css/ResultTable.css";

const ResultTable = ({ tools }) => {

    if (!Array.isArray(tools)) {
        return <p>No tools found</p>;
    }

    return (
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
                    {tools.map((tool, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{tool.productId}</td>
                                <td>{tool.company}</td>
                                <td>{tool.toolName}</td>
                                <td>{tool.quantity}</td>
                                <td>{tool.price}</td>
                            </tr>
                        )
                    )}
                </tbody> 
            </table>
        </div>
  )
}

export default ResultTable;