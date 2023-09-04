import React, { FC } from "react";
import { useRouter } from "next/router";

import { Card, CardBody, Image, CardFooter } from '@nextui-org/react';
import { SmallPokemon } from "@/interfaces";


export const PokemonCard: FC<SmallPokemon> = ({ name, id, img } ) => {

  const router =  useRouter();
  
  const onClick = () => {
    
    router.push(`/name/${ name }`)

  }

  return (
    <Card 
      className="py-4 "
      isHoverable
      isPressable
      onPress={ onClick }
      >
      <CardBody className="overflow-visible py-2 " style={{ display: 'flex', alignItems: 'center' }}>
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={ img }
          width={150}
        />
      </CardBody>
      <CardFooter  className="pb-0 pt-2 px-4 justify-between">
        <h4 className="font-bold text-large capitalize">{` ${ name }`} </h4>
        <h4 className="font-bold text-large capitalize">{`# ${ id } `} </h4>
      </CardFooter>
    </Card>
  );
}
