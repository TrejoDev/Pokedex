import { FC } from 'react';
import { useRouter } from 'next/router';

import { Card, CardBody, Image } from '@nextui-org/react';
import { log } from 'console';


interface Props {
    pokemonId: number;
}


export const FavoriteCardPokemon:FC<Props> = ({ pokemonId }) => {

  const router = useRouter();


  const onFavoriteClicked = () => {
    
    router.push(`/pokemon/${ pokemonId }`);
  }


  return (
    <Card 
      className="py-4 "
      isHoverable
      isPressable
      onPress={ onFavoriteClicked }
      >
      <CardBody className="overflow-visible py-2 " style={{ display: 'flex', alignItems: 'center' }}>
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemonId }.svg`}
          width={150}
        />
      </CardBody>
    </Card>
    
  )
};