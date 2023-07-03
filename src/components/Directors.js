import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <div>
    <h1>Directors Page</h1>
    {directors.map((directors, index) => (
      <div key={index}>
        <p>Director:</p>
        <h3>{directors.name}</h3>
        <p>Movies:</p>
        {directors.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </div>
    ))}
  </div>
)};

export default Directors;
