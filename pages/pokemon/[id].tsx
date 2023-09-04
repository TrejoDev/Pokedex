import { useEffect, useState } from "react";

import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";

import confetti from 'canvas-confetti';

import { Pokemon } from "@/interfaces/pokemon-data";
import { getPokemoninfo, localFavorites, strings } from "@/utils";
import { Layouts } from "@/components/layouts";

interface Props {
  pokemon: Pokemon;
}

export const PokemonPage: NextPage<Props> = ( {pokemon}) => {

    const [isInFavorites, setIsInFavorites] = useState(false);

    useEffect(() => {
      setIsInFavorites(localFavorites.existInFavorites(pokemon.id));
    }, [pokemon.id]);
  
  
  const onToggleFavorite = () => {
      
    localFavorites.toggleFavorite( pokemon.id );
    setIsInFavorites(!isInFavorites);

    if ( isInFavorites ) return;

    confetti({
      zIndex: 999, 
      particleCount: 100,
      spread: 160,
      angle: -160,
      origin: {
        x: 1,
        y: 0
      }
    })

  }

  
  
  

  return (
    <Layouts title={ strings.wordCapitalize(pokemon.name) }>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-2" >
        <Card 
          className="py-4"
          isHoverable
          isPressable
          
          >
          <CardBody className="overflow-visible py-2 " style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              
              alt={ pokemon.name }
              className="object-cover rounded-xl "
              src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
              width={200}
            />
          </CardBody>
        </Card>  
        <Card 
          className="py-4"
          isHoverable
        >
          <CardHeader className="pb-0 pt-2 px-4 justify-between">
              <h1 className="font-bold text-large capitalize" >{` ${ pokemon.name }`} </h1>
              <Button
                color="secondary" 
                variant={ isInFavorites ? 'solid' : 'bordered' }
                onPress={onToggleFavorite}
              >
                {
                  isInFavorites 
                  ? 'In Favorites'
                  : 'Save in Favorites'
                }      
              </Button>
          </CardHeader>
          <CardBody>
           <h1 className="font-bold text-large">Sprites:</h1>
           <div className="gap-0 grid grid-cols-2 sm:grid-cols-4"  >
             <Image 
                src={ pokemon.sprites.front_default }
                alt={ pokemon.name }
                width={ 100 }
                height={ 100 }
            />
            <Image 
                src={ pokemon.sprites.back_default }
                alt={ pokemon.name }
                width={ 100 }
                height={ 100 }
            />
            <Image 
                src={ pokemon.sprites.front_shiny }
                alt={ pokemon.name }
                width={ 100 }
                height={ 100 }
            />
            <Image 
                src={ pokemon.sprites.back_shiny }
                alt={ pokemon.name }
                width={ 100 }
                height={ 100 }
            />
           </div>
          </CardBody>
          <CardFooter  className="pb-0 pt-2 px-4 justify-between">
            <h4 className="font-bold text-large capitalize">{`Pokémon # ${ pokemon.id } `} </h4>
          </CardFooter>
        </Card>  
      </div>
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
    fallback: false
  }
};

export const getStaticProps: GetStaticProps = async ({params}) => {
 
  const { id } = params as { id: string };

  return {
    props: {
      pokemon: await getPokemoninfo( id )
    }
  }
};


export default PokemonPage;