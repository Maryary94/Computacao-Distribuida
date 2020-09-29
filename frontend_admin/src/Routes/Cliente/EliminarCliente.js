import React from "react";
import "./Cliente.css";
import { TextField, Button } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: "2ch",
//     },
//   },
// }));
// class EliminarCliente extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       submitting: false,
//       values: {
//         _id: "",
//       },
//       errors: {},
//     };
//   }

export default function EliminarCliente() {
  // const classes = useStyles();

  return (
    <div className="container-column-Parque ">
      <h3 className="title">Eliminar Cliente</h3>
      <form className={["classForm"].join(" ")}>
        <TextField id="_id" label="ID do cliente" variant="outlined" />

        <Button
          id="escolhas"
          variant="contained"
          color="primary"
          // onClick={() => this.submit()}
        >
          Eliminar Cliente
        </Button>
      </form>
    </div>
  );
}
