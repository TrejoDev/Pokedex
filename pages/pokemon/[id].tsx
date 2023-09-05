import { GetStaticProps, GetStaticPaths, NextPage } from "next";


import { PokemonMainCard } from "@/components/pokemon";
import { Layouts } from "@/components/layouts";
import { Pokemon } from "@/interfaces/pokemon-data";
import { getPokemoninfo, strings } from "@/utils";

interface Props {
  pokemon: Pokemon;
}

export const PokemonPage: NextPage<Props> = ( {pokemon}) => {

  return (
    <Layouts title={ strings.wordCapitalize(pokemon.name) }>
      <PokemonMainCard pokemon={ pokemon } />
    </Layouts>
  )
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  
  const pokemons151: string[] = [...Array(151)].map( ( value, index ) => `${ index + 1 }` );
                                
  return {
    paths: pokemons151.map( id => ({
      params: { id }
    }))
    /* [
      {params: { id: '1'}},
    ] */,
    // fallback: false
    fallback: 'blocking'
  }
};

export const getStaticProps: GetStaticProps = async ({params}) => {
 
  const { id } = params as { id: string };

  const pokemon = await getPokemoninfo( id );

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
    revalidate: 86400, // 60seg * 60hr * 24dia
  }
};


export default PokemonPage;