import { GetStaticProps, GetStaticPaths, NextPage } from "next";


import { PokemonMainCard } from "@/components/pokemon";
import { Layouts } from "@/components/layouts";
import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces/pokemon-data";
import { getPokemoninfo, strings } from "@/utils";
import { PokemonListResponse } from "@/interfaces";

interface Props {
  pokemon: Pokemon;
}

export const PokemonByNamePage: NextPage<Props> = ( {pokemon}) => {

  return (
    <Layouts title={ strings.wordCapitalize(pokemon.name) }>
      <PokemonMainCard pokemon={ pokemon } />
    </Layouts>
  )
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  
    const { data } = await pokeApi.get<PokemonListResponse>( '/pokemon?limit=151' );
    
    const pokemonNames: string[] = [];
  
    // Itera sobre los resultados y agrega los nombres al array
    data.results.forEach((pokemon) => {
    if (pokemon.name) {
        pokemonNames.push(pokemon.name);
    }
    });
                            
  return {
    paths: pokemonNames.map( name => ({
      params: { name }
    }))
     ,
    fallback: 'blocking'
  }
};

export const getStaticProps: GetStaticProps = async ({params}) => {
 
  const { name } = params as { name: string };


  const pokemon = await getPokemoninfo( name.toLowerCase() );

  if( !pokemon ){
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  
  return {
    props: {
      pokemon
    },
    revalidate: 86400
  }
};


export default PokemonByNamePage;