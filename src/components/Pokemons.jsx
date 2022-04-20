import React from "react";
import { useState, useEffect } from "react";

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
    const res = await fetch(
      `http://localhost:8080/dat3_startcode_security_war_exploded/api/info/pokemon`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const data = await res.json();
    return data;
  };

  return (
    <div className="border">
      {pokemons.map((pokemon, index) => {
        console.log("name: " + pokemon.name);
        console.log("url: " + pokemon.url);
        <div key={index}>
          <h2>Pokemon name: {pokemon.name}</h2>
          <p>Pokemon url: {pokemon.url}</p>
        </div>;
      })}
    </div>
  );
};

export default Pokemons;
