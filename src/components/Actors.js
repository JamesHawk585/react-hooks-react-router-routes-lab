import React from "react";
import { actors } from "../data";

function Actors() {
  return (
  <div>
    <h1>Actors Page</h1>
    {actors.map((actor, index) => (
      <div key={index}>
        <p>Actor:</p>
        <h3>{actor.name}</h3>
        <p>Movies:</p>
        {actor.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </div>
    ))}
    </div>
  );
};
export default Actors;
