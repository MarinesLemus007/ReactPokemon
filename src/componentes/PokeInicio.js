import React, { Component } from "react";
import {Link} from "react-router-dom";
import logo from "../img-pokemon.png";

class PokeInicio extends Component {
  render() {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Link to="/pokemons">Ir a</Link>
      </div>
    );
  }
}
export default PokeInicio;