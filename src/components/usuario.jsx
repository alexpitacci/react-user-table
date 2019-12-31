import React, { Component } from "react";
import Navbar from "./navbar";
import TabelaUsuario from "./tabelaUsuario";
import "./usuario.css";

class Usuario extends Component {
  state = { modoEscuro: false };

  trocarModo = () => {
    this.setState({ modoEscuro: !this.state.modoEscuro });
  };
  render() {
    let mainClasses = "full-frame ";
    mainClasses += this.state.modoEscuro ? "bg-dark" : "bg-light";

    const textClasses = this.state.modoEscuro ? "text-light" : "text-dark";

    return (
      <div className={mainClasses}>
        <div className="container">
          <Navbar
            modoEscuro={this.state.modoEscuro}
            onTrocarModo={this.trocarModo}
          />

          <h2 className={textClasses}>Usuários</h2>

          <TabelaUsuario modoEscuro={this.state.modoEscuro} />
        </div>
      </div>
    );
  }
}

export default Usuario;
