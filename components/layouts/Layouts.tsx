import { FC } from "react"
import Head from "next/head"

import { NavbarUI } from "../UI"
import { ThemeSwitcher } from "@/themes"

interface Props {
    children: JSX.Element | JSX.Element []
    title?: string
}

const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin;

export const Layouts: FC<Props> = ({ children, title } ) => {




  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App '}</title>
            <meta name="author" content="TrejoDev" />
            <meta name="description" content={`Information about pokemon ${ title }`} />
            <meta name="keywords" content={`${ title }, pokemon, pokedex `} />

            <meta property="og:title" content={`${title} Information`} />
            <meta property="og:description" content={`Page about ${title}`} />
            <meta property="og:image" content={`${ origin }/img/banner.png`} />
        </Head>
        <ThemeSwitcher />
        <NavbarUI />
        <main 
          style={{
            padding: '0px 20px'
          }}
        >
            { children }
        </main>
        
    </>
  )
}
