import React from "react";
import "./App.css";
import { Route, Switch, Redirect, withRouter, Link } from "react-router-dom";

import { Button, ButtonGroup } from "@material-ui/core";

import Parque from "./Routes/Parque";

import Reserva from "./Routes/Reserva";

function App() {
  return (
    <>
      <header className="App-header">
        <ButtonGroup
          variant="text"
          color="default"
          aria-label="text primary button group"
        >
          <Button>
            <Link to="/Parque" className="GrupoColor">
              Parque
            </Link>
          </Button>

          <Button>
            <Link to="/Reserva" className="GrupoColor">
              Reserva
            </Link>
          </Button>
        </ButtonGroup>
      </header>
      {/*
      <Button variant="contained" color="primary">
        Um button
      </Button>
      */}
      <Switch>
        <Route path="/" exact render={(props) => <Parque {...props} />} />
        />
        <Route
          path="/Reserva"
          exact
          render={(props) => <Reserva {...props} />}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <div>Isto é a apresentação do projecto (Home)</div>
          )}
        />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default withRouter(App);
