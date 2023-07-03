import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ onPageChange }) {

    function handleClick(e) {
        onPageChange(e.target.name)
    }



//   return (
//     <div>
//       <a onClick={handleClick} name="Home" href="#Home">Home</a>

//       <a onClick={handleClick} name="Actors" href="#Actors">Actors</a>
//       <a onClick={handleClick} name="Directors" href="#Directors">Directors</a>
//       <a onClick={handleClick} name="Movies" href="#Movies">Movies</a>
//     </div>
//   );
// }

return (
  <nav>
    <NavLink to="/" exact>Home</NavLink>
    <NavLink to="/movies" exact>Movies</NavLink>
    <NavLink to="/directors" exact>Directors</NavLink>
    <NavLink to="/actors" exact>Actors</NavLink>
  </nav>
  );
}
export default NavBar;
