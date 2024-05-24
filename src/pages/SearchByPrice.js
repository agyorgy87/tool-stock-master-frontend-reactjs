import React from 'react';
import NavigationBar from "../components/NavigationBar.js";
import ResultTable from "../components/ResultTable.js";

const SearchByPrice = () => {
  return (
    <div>
        <div>
            <NavigationBar/>
        </div>
        <div className="d-flex justify-content-center mt-5">
            <div className="form-floating mb-3">
                <input 
                className="form-control" 
                id="priceMin" 
                />
                <label htmlFor="quantityMin">Min Price</label>
            </div>
            <div className="ms-3 me-3">
                <p>-</p>
            </div>
            <div className="form-floating mb-3">
                <input 
                className="form-control" 
                id="priceMax" 
                />
                <label htmlFor="priceMax">Max Price</label>
            </div>
            <div className="ms-3 mt-2">
                <button className="btn btn-primary">
                    Search
                </button>
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
            <ResultTable/> 
        </div>
    </div>
  )
}

export default SearchByPrice