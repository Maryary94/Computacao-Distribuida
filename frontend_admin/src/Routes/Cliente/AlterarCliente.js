import React from "react";
import "./Cliente.css";
import { TextField, Button } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

export default function AlterarCliente() {
  // const classes = useStyles();

  return (
    <div className="container-column-Parque ">
      <h3 className="title">Alterar Cliente</h3>
      <form className={["classForm"].join(" ")}>
        <TextField id="_id" label="ID do cliente" variant="outlined" />
        <TextField
          required
          id="Nome do cliente"
          label="Nome do cliente"
          variant="outlined"
        />
        <TextField required id="Saldo" label="Saldo" variant="outlined" />

        <Button
          id="escolhas"
          variant="contained"
          color="primary"
          // onClick={() => this.submit()}
        >
          Alterar Cliente
        </Button>
      </form>
    </div>
  );
}
