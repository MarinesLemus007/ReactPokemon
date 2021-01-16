import React, { Component } from "react";
import "./App.css";
import PokeApp from "./componentes/PokeApp";
import PokeInicio from "./componentes/PokeInicio";

class App extends Component {
  render() {
    return (
      <>
        <PokeInicio />
        <PokeApp />
      </>
    );
  }
}
export default App;
