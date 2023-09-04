import { NextPage, GetStaticProps } from 'next';

import { pokeApi } from '@/api';
import { Layouts } from '@/components/layouts';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { PokemonCard } from '@/components/pokemon';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ( { pokemons } ) => {

  return (
      <Layouts title='Listado de Pokemons'>
        
       
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {
          pokemons.map( (pokemon) => (
            <PokemonCard
              key={ pokemon.id } 
              { ...pokemon }
             />
          ) )
        }
      </div>

      </Layouts>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>( '/pokemon?limit=151' )

  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
      ...poke,
      id: `${i + 1}`,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }) )

 

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;