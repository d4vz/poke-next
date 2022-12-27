import Image from 'next/image';
import { IPokemon, iPokemonList } from '../utilities/types';

export async function getStaticProps() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
  const data = await fetch(url).then((res) => res.json());
  const pokemonList: iPokemonList[] = data.results;

  for (let i = 0; i < pokemonList.length; i++) {
    const pokemon: IPokemon = await fetch(pokemonList[i].url)
      .then((res) => res.json())
      .then((data) => data);

    pokemonList[i].image = pokemon.sprites.front_default;
  }

  return {
    props: {
      pokemonList,
    },
  };
}

export default function Home({ pokemonList }: { pokemonList: iPokemonList[] }) {
  console.log(pokemonList);

  return (
    <div className="container mx-auto my-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {pokemonList.map((pokemon) => (
          <div
            key={pokemon.name}
            className="bg-zinc-800 rounded-lg py-4 flex flex-col justify-center items-center"
          >
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <h2 className="text-xl font-bold text-center">
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
