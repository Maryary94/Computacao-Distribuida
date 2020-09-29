import React from "react";
import "./App.css";
import { Route, Switch, Redirect, withRouter, Link } from "react-router-dom";

import { Button, ButtonGroup } from "@material-ui/core";

import VerParque from "./Routes/Parque/VerParques";
import CriarParque from "./Routes/Parque/CriarParque";
import AlterarParque from "./Routes/Parque/AlterarParque";
import EliminarParque from "./Routes/Parque/EliminarParque";

import Registo from "./Routes/Registo";

import VerCliente from "./Routes/Cliente/VerCliente";
import CriarCliente from "./Routes/Cliente/CriarCliente";
import AlterarCliente from "./Routes/Cliente/AlterarCliente";
import EliminarCliente from "./Routes/Cliente/EliminarCliente";

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
            <Link to="/VerParque" className="GrupoColor">
              Ver Parque
            </Link>
          </Button>
          <Button>
            <Link to="/CriarParque" className="GrupoColor">
              Criar Novo Parque
            </Link>
          </Button>
          <Button>
            <Link to="/AlterarParque" className="GrupoColor">
              Alterar Parque
            </Link>
          </Button>
          <Button>
            <Link to="/EliminarParque" className="GrupoColor">
              Eliminar Parque
            </Link>
          </Button>
        </ButtonGroup>
        <ButtonGroup
          variant="text"
          color="default"
          aria-label="text primary button group"
        >
          <Button>
            <Link to="/VerCliente" className="GrupoColor">
              Ver Cliente
            </Link>
          </Button>
          <Button>
            <Link to="/CriarCliente" className="GrupoColor">
              Criar Novo Cliente
            </Link>
          </Button>
          <Button>
            <Link to="/AlterarCliente" className="GrupoColor">
              Alterar Cliente
            </Link>
          </Button>
          <Button>
            <Link to="/EliminarCliente" className="GrupoColor">
              Eliminar Cliente
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
        <Route
          path="/VerParque"
          exact
          render={(props) => <VerParque {...props} />}
        />
        <Route
          path="/CriarParque"
          exact
          render={(props) => <CriarParque {...props} />}
        />
        <Route
          path="/AlterarParque"
          exact
          render={(props) => <AlterarParque {...props} />}
        />
        <Route
          path="/EliminarParque"
          exact
          render={(props) => <EliminarParque {...props} />}
        />

        <Route
          path="/Registo"
          exact
          render={(props) => <Registo {...props} />}
        />
        <Route
          path="/VerCliente"
          exact
          render={(props) => <VerCliente {...props} />}
        />
        <Route
          path="/CriarCliente"
          exact
          render={(props) => <CriarCliente {...props} />}
        />
        <Route
          path="/AlterarCliente"
          exact
          render={(props) => <AlterarCliente {...props} />}
        />
        <Route
          path="/EliminarCliente"
          exact
          render={(props) => <EliminarCliente {...props} />}
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
