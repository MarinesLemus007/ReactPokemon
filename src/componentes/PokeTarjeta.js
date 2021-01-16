import React from "react";

function PokeTarjeta({pokedata}){
    
    return (
        <div>
            {pokedata.map((pokemon, index) =>{

                let urlImagen ="https://pokeres.bastionbot.org/images/pokemon/";
                let formatoImagen= ".png"

                return <>
                        <h3 key={index}>{pokemon.name}</h3>
                        <p>{pokemon.url}</p>
                        <img src={urlImagen + (index+1) + formatoImagen}/>
                    </>
            })}
        </div>
    );
}
export default PokeTarjeta;