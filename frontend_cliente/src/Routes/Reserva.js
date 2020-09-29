import React from "react";
import { TextField, Button } from "@material-ui/core";
import "./Reserva.css";
import { withStyles } from "@material-ui/core/styles";
import { socket } from "../socket";

const styles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
});

class Reserva extends React.Component {
  register() {
    socket.emit("register", { test: true });
  }

  render() {
    return (
      <form className={this.props.classes.root} noValidate autoComplete="off">
        <div className="container-column">
          <h3 className="title">Fazer uma reserva</h3>
          <TextField
            id="outlined-helperText"
            label="Nome cliente"
            variant="outlined"
          />
          <TextField
            required
            id="Matricula"
            label="Matricula"
            variant="outlined"
          />
          <TextField
            required
            id="Parque Estacionamento"
            label="Nome do Parque"
            variant="outlined"
          />

          <TextField
            required
            id="outlined-number"
            label="Lugar "
            variant="outlined"
          />
          <Button
            id="escolhas"
            variant="contained"
            color="primary"
            onClick={() => this.register()}
          >
            Validar
          </Button>
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(Reserva);
