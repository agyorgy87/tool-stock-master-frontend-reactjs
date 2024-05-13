import React from 'react';

const SearchByIdInput = () => {
  return (
    <div>
        <div className="form-floating mb-3">
            <input 
            className="form-control search-by-id-input" 
            id="productId" 
            />
                <label htmlFor="productId">Product ID</label>
        </div>
    </div>
  )
}

export default SearchByIdInput