import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { movies, actors, directors } from "../data";

function App() {
  const [page , setPage] = useState("/")

  console.log(movies, actors, directors)



  return ( 
    <div>
      <NavBar onPageChange={setPage}/>
      <Switch>
        <Route path="/Actors">
          <Actors actors={actors}/>
        </Route>
        <Route path="/Directors">
          <Directors directors={directors}/>
        </Route>
        <Route path="/Movies">
          <Movies movies={movies}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
