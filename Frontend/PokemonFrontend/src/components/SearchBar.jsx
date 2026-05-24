import { useState } from "react";

function SearchBar({ onSearch }) {

  const [name, setName] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if(name.trim() !== "") {
      onSearch(name);
    }
  };

  return (
    <form onSubmit={handleSearch} className="d-flex justify-content-center mb-5">
      <input 
        type="text" 
        className="form-control bg-dark text-white border-secondary w-50 me-2" 
        placeholder="Enter pokemon name (e.g. pikachu)" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit" className="btn btn-primary px-4 fw-bold">
        Search
      </button>
    </form>
  );
}

export default SearchBar;