import React from "react";
import {
  TextField,
  Button,
  // List,
  // ListItem,
  // ListItemText,
  // Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Registo.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="container-column">
        <h3 className="title">Fazer um registo</h3>
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
        <Button id="escolhas" variant="contained" color="primary">
          Validar
        </Button>
      </div>
      {/*
      <div className="container-column">
        <h3 className="title">Reservas realizadas</h3>
        <form noValidate autoComplete="off">
          <div>
            <List component="nav">
              <ListItem>
                <ListItemText primary="parque 1" secondary="Valor 1" />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="parque 2" secondary="Valor 2" />
              </ListItem>
              <Divider />
            </List>
      </div>
        </form>
      </div>*/}
    </form>
  );
}
