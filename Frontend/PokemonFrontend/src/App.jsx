import { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";

import { getPokemon } from "./services/api";

function App() {

  const [pokemon, setPokemon] = useState(null);

  const searchPokemon = async (name) => {

    try {

      const data = await getPokemon(name);

      setPokemon(data);

    } catch (error) {

      alert("Pokemon not found");

    }
  };

  return (
    <div className="bg-dark text-white min-vh-100 pt-5">
      <div className="container">
        <h1 className="text-center mb-4 text-info fw-bold">PokéSearch</h1>
        
        <SearchBar onSearch={searchPokemon} />

        {
          pokemon && <PokemonCard pokemon={pokemon} />
        }
      </div>
    </div>
  );
}

export default App;