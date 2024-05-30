import { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBar from "../components/NavigationBar.js";
import ResultTable from "../components/ResultTable.js";

const SearchByQuantity = () => {

    const [filteredTools, setFilteredTools] = useState([]);

    const [minValueInput,setMinValueInput] = useState(null);
    const [maxValueInput, setMaxValueInput] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/alltools")
            .then(response => {
                setFilteredTools(response.data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    },[])

    const searchByQuantity = () => {
        if(minValueInput !== null && maxValueInput === null){
            axios.get(`http://localhost:8080/searchByMinQuantity/${minValueInput}`)
            .then((response) => {
                setFilteredTools(response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
                setFilteredTools([]);
            });
        }else{
            axios.get(`http://localhost:8080/searchByQuantityBetween/${minValueInput}/${maxValueInput}`)
            .then((response) => {
                setFilteredTools(response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
                setFilteredTools([]);
            });
        }
    }

    /*  //working
    const searchByQuantity = () => {
            axios.get(`http://localhost:8080/searchByQuantity/${minValueInput}/${maxValueInput}`)
            .then((response) => {
                setFilteredTools(response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
                setFilteredTools([]);
            });
    }
    */

    return (
        <div>
            <div>
                <NavigationBar/>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="form-floating mb-3">
                    <input 
                    className="form-control" 
                    id="quantityMin" 
                    onChange={(e) => setMinValueInput(e.target.value)}
                    />
                    <label htmlFor="quantityMin">Min Quantity</label>
                </div>
                <div className="ms-3 me-3">
                    <p>-</p>
                </div>
                <div className="form-floating mb-3">
                    <input 
                    className="form-control" 
                    id="quantityMax" 
                    onChange={(e) => setMaxValueInput(e.target.value)}
                    />
                    <label htmlFor="quantityMax">Max Quantity</label>
                </div>
                <div className="ms-3 mt-2">
                    <button className="btn btn-primary" onClick={searchByQuantity}>
                        Search
                    </button>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <ResultTable tools={filteredTools}/>
            </div>
        </div>
    )
}

export default SearchByQuantity;