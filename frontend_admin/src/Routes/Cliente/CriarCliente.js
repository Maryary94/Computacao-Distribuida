import React from "react";

import "./Cliente.css";
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

class CriarCliente extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitting: false,
      values: {
        nome: "",
        viatura: "",
        saldo: "1",
      },
      errors: {},
    };
  }

  async submit() {
    await this.setState({ submitting: true });

    try {
      if (this.state.values.nome === "") {
        this.setState({
          errors: { nome: "Tem que ser preenchido" },
        });
        return;
      }

      // if (this.state.values.viatura < 0) {
      //   this.setState({
      //     errors: { viatura: "Tem que um valor positivo" },
      //   });
      //   return;
      // }

      if (this.state.values.viatura == 0) {
        this.setState({
          errors: { viatura: "Tem que ser preenchido" },
        });
        return;
      }

      if (this.state.values.saldo < 0) {
        this.setState({
          errors: {
            saldo: "Tem que um valor positivo",
          },
        });
        return;
      }

      // let lugares = [];

      // for (let i = 1; i <= this.state.values.saldo; i++) {
      //   lugares.push({
      //     lugar: i,
      //     disponivel: true,
      //     tipo: false, // lugares normais
      //   });
      // }

      let data = {
        nome: this.state.values.nome,
        viatura: this.state.values.viatura,
        saldo: Number(this.state.values.nome),
      };

      let response = await fetch("http://127.0.0.1:5000/cliente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        let nome = await response.json();
        alert("cliente criado com sucesso!");
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
          <h3 className="title">Criar novo cliente</h3>
          <form
            className={[this.props.classes.root, "classForm"].join(" ")}
            noValidate
            autoComplete="off"
          >
            <TextField
              error={Boolean(this.state.errors.nome)}
              helperText={this.state.errors.nome}
              required
              id="outlined-helperText"
              label="Nome do cliente"
              variant="outlined"
              value={this.state.values.nome}
              onChange={(e) =>
                this.setState({
                  values: { ...this.state.values, nome: e.target.value },
                })
              }
            />

            <TextField
              error={Boolean(this.state.errors.viatura)}
              helperText={this.state.errors.viatura}
              required
              // type="number"
              id="Parque Estacionamento"
              label="Matricula"
              variant="outlined"
              value={this.state.values.viatura}
              onChange={(e) =>
                this.setState({
                  values: { ...this.state.values, viatura: e.target.value },
                })
              }
            />

            <TextField
              error={Boolean(this.state.errors.saldo)}
              helperText={this.state.errors.saldo}
              required
              type="number"
              id="outlined-number"
              label=" Saldo "
              variant="outlined"
              value={this.state.values.saldo}
              onChange={(e) =>
                this.setState({
                  values: {
                    ...this.state.values,
                    saldo: e.target.value,
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

export default withStyles(styles)(CriarCliente);
