import React from "react";

const PokemonCard = (props) => {
  const { pokeData } = props;

  if (!pokeData) return null;

  return (
    <div className="card p-3 text-center mx-auto" style={{ maxWidth: "320px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
      <img
        src={pokeData.sprites?.front_default}
        alt={pokeData.name}
        className="mx-auto mt-2"
        style={{ width: "160px", imageRendering: "pixelated" }}
      />

      <h2 className="text-capitalize mt-3 fw-bold" style={{ color: "#333" }}>
        {pokeData.name}
      </h2>

      <div className="d-flex justify-content-around my-3 text-muted">
        <small><strong>ID:</strong> #{pokeData.id}</small>
        <small><strong>HT:</strong> {pokeData.height}</small>
        <small><strong>WT:</strong> {pokeData.weight}</small>
      </div>

      <div className="mb-3">
        <h5 className="text-secondary">Types</h5>
        <div>
          {pokeData.types?.map((typeObj) => (
            <span key={typeObj.type.name} className="badge bg-primary m-1 px-3 py-2 rounded-pill shadow-sm">
              {typeObj.type.name}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h5 className="text-secondary">Abilities</h5>
        <div>
          {pokeData.abilities?.map((abilityObj) => (
            <span key={abilityObj.ability.name} className="badge bg-dark m-1 px-2 py-1">
              {abilityObj.ability.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;