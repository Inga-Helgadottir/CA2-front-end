import React from "react";
import { useState, useEffect } from "react";
import { swapiUrl } from "../settings";

const Swapi = () => {
  const [luke, setLuke] = useState([]);

  useEffect(() => {
    const getSwapi = async () => {
      const pokemonsFromDB = await fetchSwapi();
      setLuke(pokemonsFromDB);
    };
    getSwapi();
  }, []);

  const fetchSwapi = async () => {
    const res = await fetch(swapiUrl, {
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
      <h2>Name: {luke.name}</h2>
      <p>Height: {luke.height}</p>
      <p>Mass: {luke.mass}</p>
      <p>Hair color: {luke.hair_color}</p>
      <p>Gender: {luke.gender}</p>
      <p>Eye color: {luke.eye_color}</p>
      <p>Birth year: {luke.birth_year}</p>
    </div>
  );
};

export default Swapi;
