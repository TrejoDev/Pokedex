import { Image } from "@nextui-org/react"

export const NoFavorites = () => {
  return (
    <div 
        className="gap-2 grid grid-cols-2 sm:grid-cols-4"
        style={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 100px)',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center'
        }}>
        <h1 className="font-bold text-large">No hay favoritos</h1>
        <Image
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
          width={250}
          height={250}
          alt="No favorites"
          style={{opacity: 0.1}}
        />
    
    </div>
  )
}
