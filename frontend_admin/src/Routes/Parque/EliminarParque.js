import React from "react";
import "./VerParques.css";
import { TextField, Button } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: "2ch",
//     },
//   },
// }));

export default function EliminarParque() {
  // const classes = useStyles();

  return (
    <div className="container-column-Parque ">
      <h3 className="title">Eliminar Parque</h3>
      <form className={["classForm"].join(" ")}>
        <TextField id="_id" label="ID do Parque" variant="outlined" />

        <Button
          id="escolhas"
          variant="contained"
          color="primary"
          // onClick={() => this.submit()}
        >
          Eliminar Parque
        </Button>
      </form>
    </div>
  );
}
