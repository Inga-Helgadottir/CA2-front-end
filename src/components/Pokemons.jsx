import React from "react";
import { useState, useEffect } from "react";
import { pokemonUrl } from "../settings";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const pokemonsFromDB = await fetchPokemons();
      setPokemons(pokemonsFromDB.results);
    };
    getPokemons();
  }, []);

  const fetchPokemons = async () => {
    const res = await fetch(pokemonUrl, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await res.json();
    return data;
  };

  return (
    <div className="border">
      {pokemons != null &&
        pokemons.map((pokemon, index) => {
          return (
            <div key={index}>
              <h2>Pokemon name: {pokemon.name}</h2>
              <p>Pokemon url: {pokemon.url}</p>
            </div>
          );
        })}
      {pokemons == null && <h2>There are no pokemons</h2>}
    </div>
  );
};

export default Pokemons;
