import React from "react";
import {Switch, Route} from "react-router-dom";
import PokeApp from "./componentes/PokeApp";
import PokeInicio from "./componentes/PokeInicio";

const Rutas = (props) =>{
    return (
        <Switch>
            <Route exact path="/" component={PokeInicio}/>
            <Route path="/pokemons" component={PokeApp}/>
        </Switch>
    );
}
export default Rutas;