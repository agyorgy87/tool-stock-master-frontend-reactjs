import React from 'react';
import NavigationBar from '../components/NavigationBar.js';
import ModificationTable from '../components/ModificationTable.js';

const ToolModification = () => {
  return (
    <div>
        <div>
            <NavigationBar/>
        </div>
        <div className="d-flex justify-content-center mt-5">
            under development
        </div>
        <div className="d-flex justify-content-center mt-4">
            <ModificationTable/>
        </div>
    </div>
  )
}

export default ToolModification;