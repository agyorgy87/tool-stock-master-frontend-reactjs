import React from 'react';
import NavigationBar from "../components/NavigationBar.js";
import ResultTable from "../components/ResultTable.js";

const SearchByCompany = () => {
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
                />
                <label htmlFor="company">Company</label>
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
            <ResultTable/>
        </div>
    </div>
  )
}

export default SearchByCompany;