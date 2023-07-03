import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  const [page , setPage] = useState("/")



  return ( 
    <div>
      <NavBar onPageChange={setPage}/>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/Actors">
          <Actors />
        </Route>
        <Route path="/Directors">
          <Directors />
        </Route>
        <Route path="/Movies">
          <Movies />
        </Route>
        </Switch>
    </div>
  )
}

export default App;
