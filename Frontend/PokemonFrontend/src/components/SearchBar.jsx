import React, { useState } from 'react';

const SearchBar = ({ onSearch, isLoading }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim() !== '') {
      onSearch(searchText);
    }
  };

  return (
    <form onSubmit={onSubmit} className="d-flex justify-content-center mb-5">
      <input 
        type="text" 
        className="form-control w-50 me-2" 
        placeholder="Enter pokemon name (e.g. pikachu)" 
        value={searchText} 
        onChange={handleInputChange} 
      />
      <button className="btn btn-primary px-4" type="submit" disabled={isLoading}>
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
};

export default SearchBar;
