import React from "react";
import "./VerParques.css";
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
      <h3 className="title">Alterar Parque</h3>
      <form className={["classForm"].join(" ")}>
        <TextField id="_id" label="ID do Parque" variant="outlined" />
        <TextField
          id="Nome do Parque"
          label="Nome do Parque"
          variant="outlined"
        />
        <TextField id="Preço" label="Preço" variant="outlined" />

        <Button
          id="escolhas"
          variant="contained"
          color="primary"
          // onClick={() => this.submit()}
        >
          Alterar Parque
        </Button>
      </form>
    </div>
  );
}
