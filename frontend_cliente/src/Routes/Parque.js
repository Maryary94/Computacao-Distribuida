import React from "react";

import "./Parque.css";
import {
  Button,
  TextField,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";

const nomeParque = [
  {
    value: "NorteShopping",
    label: "NorteShopping",
  },
  {
    value: "MaiaShopping",
    label: "MaiaShopping",
  },
];
const lugarParque = [
  {
    value: " 1",
    label: " 1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
];

export default function Parque() {
  const [parque, setParque] = React.useState("Parque");
  const [lugar, setLugar] = React.useState("Lugar");

  const handleChangeParque = (event) => {
    setParque(event.target.value);
  };
  const handleChangeLugar = (event) => {
    setLugar(event.target.value);
  };
  return (
    <>
      <div className="container-column-Parque">
        <h3 className="title">Lista dos Parques de Estacionamento</h3>

        <form noValidate autoComplete="off">
          <div>
            <List component="nav">
              <ListItem>
                <ListItemText
                  primary="NorteShopping"
                  secondary="Preço por hora = 2.5 €"
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="MaiaShopping"
                  secondary="Preço por hora = 3 €"
                />
              </ListItem>
              <Divider />
            </List>
          </div>
        </form>
      </div>

      <div className="container-column-Escolha">
        <h3 className="title">Parques de Estacionamento</h3>

        <form noValidate autoComplete="off">
          <div>
            <TextField
              id="standard-select-parque"
              select
              label="   "
              value={parque}
              onChange={handleChangeParque}
              helperText="Escolha o parque de estacionamento que deseja"
            >
              {nomeParque.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-select-lugar"
              select
              label="   "
              value={lugar}
              onChange={handleChangeLugar}
              helperText="Escolha o lugar que deseja estacionar"
            >
              {lugarParque.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </form>
        <Button id="escolhas" variant="contained" color="primary">
          Validar
        </Button>
      </div>
    </>
  );
}
