import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress,
} from "@material-ui/core";
import "./Cliente.css";

export default class VerClientes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      clientes: [],
    };

    this.load();
  }

  async load() {
    await this.setState({ loading: true });

    try {
      let response = await fetch("http://127.0.0.1:5000/cliente");

      if (response.ok) {
        await this.setState({ clientes: await response.json() });
      }
    } catch (e) {
      alert(e);
      console.error(e);
    } finally {
      await this.setState({ loading: false });
    }
  }

  render() {
    let content;

    if (this.state.loading) {
      content = (
        <center>
          <p>Loading...</p>
          <CircularProgress />
        </center>
      );
    } else {
      content = (
        <List component="nav">
          {this.state.clientes.map((cliente) => (
            <>
              <ListItem>
                <ListItemText
                  primary={
                    <>
                      <p>{cliente.nome}</p>
                      <small>Saldo no cartão = {cliente.saldo} € </small>
                      <small> | Id = {cliente._id} </small>
                    </>
                  }
                />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      );
    }

    return (
      <>
        <div className="container-column-Parque">
          <h3 className="title">Lista dos Clientes</h3>

          <form noValidate autoComplete="off">
            <div>{content}</div>
          </form>
        </div>
      </>
    );
  }
}
