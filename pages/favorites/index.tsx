import { useEffect, useState } from "react";

import { localFavorites } from "@/utils";
import { NoFavorites } from "@/components/UI";
import { Layouts } from "@/components/layouts"
import { FavoritePokemons } from "@/components/pokemon";

const Favorites = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons( localFavorites.pokemons() )
     
  }, [])
  

  return (
    <Layouts title="Favorites Pokémons">  
        {
          favoritesPokemons.length === 0 
          ?  (<NoFavorites />)
          : ( <FavoritePokemons pokemons={ favoritesPokemons }/> )           
        }
    </Layouts>
  )
} 

export default Favorites;