import React from "react";

import "./VerParques.css";
import { Button, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
});

class CriarParque extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitting: false,
      values: {
        parque: "",
        price: "0",
        numeroDeLugares: "1",
      },
      errors: {},
    };
  }

  async submit() {
    await this.setState({ submitting: true });

    try {
      if (this.state.values.parque === "") {
        this.setState({
          errors: { parque: "Tem que ser preenchido" },
        });
        return;
      }

      if (this.state.values.price < 0) {
        this.setState({
          errors: { price: "Tem que um valor positivo" },
        });
        return;
      }

      if (this.state.values.price == 0) {
        this.setState({
          errors: { price: "Tem que ser preenchido" },
        });
        return;
      }

      if (this.state.values.numeroDeLugares < 0) {
        this.setState({
          errors: {
            numeroDeLugares: "Tem que um valor positivo",
          },
        });
        return;
      }

      let lugares = [];

      for (let i = 1; i <= this.state.values.numeroDeLugares; i++) {
        lugares.push({
          lugar: i,
          disponivel: true,
          tipo: false, // lugares normais
        });
      }

      let data = {
        parque: this.state.values.parque,
        price: Number(this.state.values.price),
        lugares: lugares,
      };

      let response = await fetch("http://127.0.0.1:5000/parque", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        let parque = await response.json();
        alert("Parque criado com sucesso!");
      }
    } catch (e) {
      alert(e);
      console.error(e);
    } finally {
      await this.setState({ submitting: false });
    }
  }

  render() {
    return (
      <>
        <div className="container-column-Parque">
          <h3 className="title">Criar Parque de Estacionamento</h3>
          <form
            className={[this.props.classes.root, "classForm"].join(" ")}
            noValidate
            autoComplete="off"
          >
            <TextField
              error={Boolean(this.state.errors.parque)}
              helperText={this.state.errors.parque}
              required
              id="outlined-helperText"
              label="Nome do parque de estacionamento"
              variant="outlined"
              value={this.state.values.parque}
              onChange={(e) =>
                this.setState({
                  values: { ...this.state.values, parque: e.target.value },
                })
              }
            />

            <TextField
              error={Boolean(this.state.errors.price)}
              helperText={this.state.errors.price}
              required
              type="number"
              id="Parque Estacionamento"
              label="Preço por hora"
              variant="outlined"
              value={this.state.values.price}
              onChange={(e) =>
                this.setState({
                  values: { ...this.state.values, price: e.target.value },
                })
              }
            />

            <TextField
              error={Boolean(this.state.errors.numeroDeLugares)}
              helperText={this.state.errors.numeroDeLugares}
              required
              type="number"
              id="outlined-number"
              label=" Numero de Lugares "
              variant="outlined"
              value={this.state.values.numeroDeLugares}
              onChange={(e) =>
                this.setState({
                  values: {
                    ...this.state.values,
                    numeroDeLugares: e.target.value,
                  },
                })
              }
            />
          </form>
          <Button
            disabled={this.state.submitting}
            id="escolhas"
            variant="contained"
            color="primary"
            onClick={() => this.submit()}
          >
            Criar
          </Button>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(CriarParque);
