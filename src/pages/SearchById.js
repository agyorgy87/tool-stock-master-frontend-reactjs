import React from 'react';
import NavigationBar from "../components/NavigationBar.js";
import SearchByIdInput from "../components/SearchByIdInput.js";
import Result from "../components/Result.js";

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
            <Result/>
        </div>
    </div>
  )
}

export default SearchById