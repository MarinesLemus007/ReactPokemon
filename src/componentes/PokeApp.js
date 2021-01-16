import React, { Component } from "react";
import axios from 'axios';
import PokeTarjeta from "./PokeTarjeta";

class PokeApp extends Component {

    state ={
        pokeData:[]
    }

componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/pokemon?Limit=151')
    .then(res =>{
        const pokeData = res.data.results;
        console.log(pokeData)
        this.setState({
            pokeData
        });

    }).catch(error =>{
        console.log(error);
    })
}

  render() {

    const {pokeData} = this.state;

    return (
        <PokeTarjeta pokedata={pokeData}/>
    );
  }
}
export default PokeApp;