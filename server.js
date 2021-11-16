const express = require("express");
const app = express();
const path = require("path");

const axios = require("axios");

const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

app.use(express.static(path.join(`${__dirname}/public`)));

app.get("/", async (_, res) => {
  const pokemonPromises = [];

  for (let i = 1; i <= 800; i++) {
    pokemonPromises.push(
      axios.get(getPokemonUrl(i)).then((response) => response.data)
    );
  }

  const pokemons = await Promise.all(pokemonPromises);

  const listPokemonsElements = pokemons.reduce((accumulator, pokemon) => {
    const types = pokemon.types.map((typeInfo) => typeInfo.type.name);

    accumulator += `
              <li class="card ${types[0]}"> 
                <img class = "card-image" alt="${pokemon.name}" src="${pokemon.sprites.front_default}"/>
                <h2 class = "card-title"> ${pokemon.id}.${pokemon.name}</h2>
                <p class="card-subtitle">${types.join(" | ")}</p>
              </li >
            `;
    return accumulator;
  }, "");

  const html = ` 
    <!DOCTYPE html>
        <html lang="pt-br">

        <head>
            <meta charset="UTF-8">
            <title>Pokedex</title>
            <link rel="stylesheet" href="./style.css" />
        </head>

        <body>

            <div class="container">
                <h1>pokedex</h1>
                <ul data-js="pokedex" class="pokedex">
                    ${listPokemonsElements}
                </ul>
            </div>
        </body>
    </html>
    `;
  res.send(html);
});

app.listen(process.env.PORT || 3000);