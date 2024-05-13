import React from 'react';
import NavigationBar from "../components/NavigationBar.js";
import SearchByIdInput from "../components/SearchByIdInput.js";
import ResultTable from "../components/ResultTable.js";

const SearchById = () => {

    return ( 
        <div>
            <div>
                <NavigationBar/>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <SearchByIdInput/>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <ResultTable/>
            </div>
        </div>
    )
}

export default SearchById;