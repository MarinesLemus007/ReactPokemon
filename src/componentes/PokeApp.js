import React, { Component } from "react";
import axios from 'axios';
import PokeTarjeta from "./PokeTarjeta";

class PokeApp extends Component {

componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/pokemon?Limit=151')
    .then(result=>{
        console.log(result)
    }).catch(console.log)
}

  render() {
    return (
        <PokeTarjeta/>
    );
  }
}
export default PokeApp;