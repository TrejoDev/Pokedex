import { FC } from 'react';
import { FavoriteCardPokemon } from './';


interface Props {
    pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (

    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
    {
        pokemons.map( id => (
            <FavoriteCardPokemon key={ id } pokemonId={ id } />          
        ))
    }
    </div>

  )
};