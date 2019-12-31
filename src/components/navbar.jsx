import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    let navClasses = "navbar ";
    navClasses += this.props.modoEscuro
      ? "navbar-dark bg-dark"
      : "navbar-light bg-light";

    let btnClasses = "btn ";
    btnClasses += this.props.modoEscuro ? "btn-light" : "btn-dark";

    let btnLabel = this.props.modoEscuro ? "Modo Claro" : "Modo Escuro";

    return (
      <nav className={navClasses}>
        <a href="#" className="navbar-brand">
          Gradativo
        </a>
        <span class="my-2">
          <button
            id="trocarModo"
            className={btnClasses}
            onClick={this.props.onTrocarModo}
          >
            {btnLabel}
          </button>
        </span>
      </nav>
    );
  }
}

export default Navbar;
