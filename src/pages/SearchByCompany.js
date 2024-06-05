import { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBar from "../components/NavigationBar.js";
import ResultTable from "../components/ResultTable.js";

const SearchByCompany = () => {

    const [filteredTools, setFilteredTools] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/all-tools")
            .then(response => {
                setFilteredTools(response.data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    },[])
 
    const searchByCompany = (e) => {
        const companyResult = e.trim();
        if (companyResult !== "") {
            axios.get(`http://localhost:8080/search-by-company/${companyResult}`)
                .then((response) => {
                    setFilteredTools(response.data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                    setFilteredTools([]);
                });
        } else {
            axios.get("http://localhost:8080/all-tools")
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
                    id="company" 
                    onChange={(e) => searchByCompany(e.target.value)}
                    />
                    <label htmlFor="company">Company</label>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <ResultTable tools={filteredTools}/>
            </div>
        </div>
    )
}

export default SearchByCompany;