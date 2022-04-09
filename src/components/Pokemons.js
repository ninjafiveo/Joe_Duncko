import { useEffect, useState } from "react";

export function Pokemons(){
    const [pokemons, setPokemons] = useState([]);

    useEffect(() =>{
        const fetchPokemons = async()=> {
            const rawPokemonsResponse = await fetch("https://pokeapi.co/api/v2/pokemon");

            const pokemonsResponse = await rawPokemonsResponse.json()

            setPokemons(pokemonsResponse.results);

        };
        fetchPokemons()
    }, []);

    console.log("pokemons", pokemons);
    
    return (
        <div>
            <h1>Pokemons</h1>
            <div>
                {pokemons.map((pokemon) => (
                    <PokemonListItem key = {pokemon.name} pokemon = {pokemon} />
                ))}

            </div>
        </div>
    );
}

const PokemonListItem = ({ pokemon }) =>{
    return(
        <div>
            <p>{pokemon.name}</p>
        </div>
    )
}