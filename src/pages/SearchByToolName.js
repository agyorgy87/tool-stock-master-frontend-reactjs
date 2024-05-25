import { useState, useEffect } from 'react';
import NavigationBar from "../components/NavigationBar.js";
import ResultTable from "../components/ResultTable.js";
import axios from 'axios';

const SearchByToolName = () => {

    const [filteredTools, setFilteredTools] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/alltools")
            .then(response => {
                setFilteredTools(response.data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    },[])
 
    const searchByName = (e) => {
        const nameResult = e.trim();
        if (nameResult !== "") {
            axios.get(`http://localhost:8080/searchByName/${nameResult}`)
                .then((response) => {
                    setFilteredTools(response.data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                    setFilteredTools([]);
                });
        } else {
            axios.get("http://localhost:8080/alltools")
            .then(response => {
                setFilteredTools(response.data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
        }
    }

    return (
        <div>
            <div> 
                <NavigationBar/>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="form-floating mb-3">
                    <input 
                    className="form-control" 
                    id="toolName" 
                    onChange={(e) => searchByName(e.target.value)}
                    />
                    <label htmlFor="toolName">Tool Name</label>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <ResultTable tools={filteredTools}/>
            </div>
        </div>
    )
}

export default SearchByToolName;