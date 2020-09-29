import React from "react";

import "./VerParques.css";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress,
} from "@material-ui/core";

export default class VerParques extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      parques: [],
    };

    this.load();
  }

  async load() {
    await this.setState({ loading: true });

    try {
      let response = await fetch("http://127.0.0.1:5000/parque");

      if (response.ok) {
        await this.setState({ parques: await response.json() });
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
          {this.state.parques.map((parque) => (
            <>
              <ListItem>
                <ListItemText
                  primary={
                    <>
                      <p>{parque.parque}</p>
                      <small>preço por hora = {parque.price} € |</small>
                      <small> ID do parque = {parque._id} </small>
                      {parque.lugares.map((lugar) => (
                        <>
                          <p>{lugar.lugar}</p>
                          {lugar.disponivel ? (
                            <p>Disponível</p>
                          ) : (
                            <p>Indisponível</p>
                          )}
                        </>
                      ))}
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
          <h3 className="title">Lista dos Parques de Estacionamento</h3>

          <form noValidate autoComplete="off">
            <div>{content}</div>
          </form>
        </div>
      </>
    );
  }
}
