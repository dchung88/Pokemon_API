import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = e => {
    const [pokemonName, setName] = useState([]);

    const pokeAPI = e => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
        .then( response=> {
            console.log(response);
            setName( response.data.results);
        })
        .catch( err => console.log(err) );
    }
    return (
        <div>
            <h1>Pokemon API</h1>
            <button className="btn btn-primary" onClick = {pokeAPI}>Fetch Pokemon</button>
            <ul>
                {
                    pokemonName.map( (name, i) =>
                    <li key = {i}>{ name.name }</li>
                    )
                }
            </ul>
        </div>
    );
}

export default Pokemon;
