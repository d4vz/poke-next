import Image from 'next/image';
import { IPokemon, iPokemonList } from '../utilities/types';
import React from 'react';
import { SearchContext } from '../context/SearchContext';

export async function getStaticProps() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
  const data = await fetch(url).then((res) => res.json());
  const pokemonList: iPokemonList[] = data.results;

  for (let i = 0; i < pokemonList.length; i++) {
    const pokemon: IPokemon = await fetch(pokemonList[i].url)
      .then((res) => res.json())
      .then((data) => data);

    pokemonList[i].image = pokemon.sprites.front_default;
    pokemonList[i].types = pokemon.types;
  }

  return {
    props: {
      pokemonList,
    },
  };
}

export default function Home({ pokemonList }: { pokemonList: iPokemonList[] }) {
  const { inputValue } = React.useContext(SearchContext);
  const [loading, setLoading] = React.useState(true);

  const filteredPokemonList = pokemonList.filter((pokemon) => {
    return pokemon.name.includes(inputValue);
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-wrap justify-center w-full flex-1 px-20 text-center">
        {filteredPokemonList.map((pokemon) => (
          <div key={pokemon.name} className="w-1/4 p-4">
            <div className="bg-zinc-700 rounded-lg shadow-xl p-4">
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                width={200}
                height={200}
              />
              <div className="text-center">
                <p className="text-xl font-bold text-zinc-200">
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </p>
                <div className="flex justify-center">
                  {pokemon.types.map((type) => (
                    <p
                      key={type.type.name}
                      className="text-sm font-bold text-zinc-200 bg-zinc-600 rounded-full px-2 py-1 m-1"
                    >
                      {type.type.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
