import React, { Component } from "react";

class TabelaUsuarios extends Component {
  state = {
    usuarios: [
      {
        nome: "Alex",
        idade: 20,
        administrador: true
      },
      {
        nome: "Carla",
        idade: 20,
        administrador: false
      },
      {
        nome: "Gustavo",
        idade: 20,
        administrador: false
      }
    ]
  };
  render() {
    let tableClasses = "table ";
    tableClasses += this.props.modoEscuro ? "table-dark" : "table-light";
    return (
      <div className="container">
        <table className={tableClasses}>
          <thead>
            <tr>
              <td>Nome</td>
              <td>Idade</td>
              <td>Administrador</td>
            </tr>
          </thead>
          <tbody>
            {this.state.usuarios.map(usuario => (
              <tr>
                <td>{usuario.nome}</td>
                <td>{usuario.idade}</td>
                <td>{usuario.administrador ? "Sim" : "Não"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TabelaUsuarios;
