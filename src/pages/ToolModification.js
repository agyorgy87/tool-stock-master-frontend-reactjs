import React from 'react';
import NavigationBar from '../components/NavigationBar.js';
import SearchByIdInput from '../components/SearchByIdInput.js';
import ModificationTable from '../components/ModificationTable.js';

const ToolModification = () => {
  return (
    <div>
        <div>
            <NavigationBar/>
        </div>
        <div className="d-flex justify-content-center mt-5">
            <SearchByIdInput/>
        </div>
        <div className="d-flex justify-content-center mt-4">
            <ModificationTable/>
        </div>
    </div>
  )
}

export default ToolModification;