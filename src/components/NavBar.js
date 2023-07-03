import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ onPageChange }) {

    function handleClick(e) {
        onPageChange(e.target.name)
    }



  return (
    <div>
      <a onClick={handleClick} name="Home" href="#Home">Home</a>
      <a onClick={handleClick} name="Actors" href="#Actors">Actors</a>
      <a onClick={handleClick} name="Directors" href="#Directors">Directors</a>
    </div>
  );
}


export default NavBar;
