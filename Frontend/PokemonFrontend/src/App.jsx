import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';
import PokemonCard from './components/PokemonCard';
import ErrorDisplay from './components/ErrorDisplay';

function App() {
  const [pokeData, setPokeData] = useState(null);
  const [errMsg, setErrMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchSubmit = async (searchText) => {
    // Reset state before fetching
    setErrMsg('');
    setPokeData(null);
    setIsLoading(true);
    
    try {
      console.log('Fetching pokemon data for:', searchText);
      const res = await axios.get(`http://localhost:8080/api/pokemon/${searchText.trim().toLowerCase()}`);
      setPokeData(res.data);
    } catch (err) {
      console.error(err);
      setErrMsg('Pokemon not found. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary fw-bold">PokéSearch</h1>
      
      <SearchBar onSearch={handleSearchSubmit} isLoading={isLoading} />

      {errMsg && <ErrorDisplay message={errMsg} />}

      {pokeData && <PokemonCard pokeData={pokeData} />}
    </div>
  );
}

export default App;
