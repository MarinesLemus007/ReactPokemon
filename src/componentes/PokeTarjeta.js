import React from "react";

function PokeTarjeta({pokedata}){
    return (
        <div>
            {pokedata.map((pokemon, index) =>{
                return <><h3 key={index}>{pokemon.name}</h3><p>{pokemon.url}</p></>
            })}
        </div>
    );
}
export default PokeTarjeta;