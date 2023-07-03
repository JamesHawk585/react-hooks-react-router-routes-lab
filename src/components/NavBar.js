import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ onPageChange }) {

    function handleClick(e) {
        onPageChange(e.target.name)
    }



return (
  <nav className="navbar">
    <NavLink to="/" exact>Home</NavLink>
    <NavLink to="/movies" exact>Movies</NavLink>
    <NavLink to="/directors" exact>Directors</NavLink>
    <NavLink to="/actors" exact>Actors</NavLink>
  </nav>
  );
}
export default NavBar;
