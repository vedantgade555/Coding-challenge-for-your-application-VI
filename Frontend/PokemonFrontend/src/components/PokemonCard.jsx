function PokemonCard({ pokemon }) {

  return (
    <div className="card mx-auto shadow-sm border-0 bg-secondary text-white" style={{ maxWidth: '400px' }}>
      <div className="text-center bg-dark p-4 border-bottom border-secondary rounded-top">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="img-fluid"
        />
      </div>

      <div className="card-body">
        <h2 className="text-center mb-4">{pokemon.name.toUpperCase()}</h2>

        <div className="row text-center mb-4">
          <div className="col">
            <p className="small mb-1 text-light">Height</p>
            <p className="fw-bold">{pokemon.height}</p>
          </div>
          <div className="col">
            <p className="small mb-1 text-light">Weight</p>
            <p className="fw-bold">{pokemon.weight}</p>
          </div>
        </div>

        <h6 className="fw-bold text-light text-uppercase mb-2">Types</h6>
        <div className="mb-4">
          {pokemon.types.map(t => (
            <span key={t.type.name} className="badge bg-dark border border-secondary me-2 text-capitalize px-3 py-2">
              {t.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;