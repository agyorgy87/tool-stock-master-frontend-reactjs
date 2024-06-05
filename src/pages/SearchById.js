import { useState, useEffect} from 'react';
import axios from 'axios';
import NavigationBar from "../components/NavigationBar.js";
import ResultTable from "../components/ResultTable.js";


const SearchById = () => {

    const [filteredTools, setFilteredTools] = useState([]);
    const [productId, setProductId] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:8080/all-tools")
            .then(response => {
                setFilteredTools(response.data);
            })
            .catch(error => {
                console.error("Error:", error);
                //exmaple: message in bootstrap alert
            });
    },[])
 
    const searchById = () => { 
        axios.get(`http://localhost:8080/search-by-product-id/${productId}`)
            .then((response) => {
                setFilteredTools([response.data]);
            })
            .catch((error) => {
                console.error("Error:", error);
                setFilteredTools([]);
            });
    }

    return ( 
        <div>
            <div>
                <NavigationBar/>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="form-floating mb-3 d-flex">
                    <input 
                    className="form-control me-3" 
                    id="productId" 
                    onChange={(e) => setProductId(e.target.value)}
                    />
                    <label htmlFor="productId">Product ID</label>
                    <button className="btn btn-primary" onClick={searchById}> 
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

export default SearchById;