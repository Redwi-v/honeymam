'use client'
import Link from "next/link"
import { MiniStarImage } from "@/app/_images/mini.star";
import { MiniHeartsImage } from "@/app/_images/mini.hearts";
import s from './text.categories.module.scss'
import { FC, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSearchParam } from "react-use";


export const TextCategories: FC<{ className?: string, listType?: boolean, tab?: string }> = ( { className, listType, tab } ) => {


  
  const [ activeItem, setActiveItem ] = useState( 0 )

  useEffect(() => {
    
    let activeTab = 0
    if ( tab === "PROMOTION" ) activeTab = 1
    if ( tab === "HIT" ) activeTab = 2
    if ( tab === '1' ) activeTab = 3
    if ( tab === '2' ) activeTab = 4
    if ( tab === '3' ) activeTab = 5

    setActiveItem(activeTab)

  }, [])

  return (

    <ul className={ `${ s.tabs } ${ className } ${ listType && s.listType }` }>

      { !listType && <Link href={ '/' } scroll={ false } className={ `${ activeItem === 0 && s.active }` } onClick={ () => setActiveItem( 0 ) }>

        <span className="p">Все</span>

      </Link> }

      <Link

        href={ {
          pathname: '/',
          query: { tab: 'PROMOTION' }
        } }
        scroll={ false }

        className={ `${ s.stars } ${ activeItem === 1 && s.active }` }
        onClick={ () => setActiveItem( 1 ) }

      >

        <span className={ `p` }>Акции</span>
        <MiniStarImage />

      </Link>

      <Link

        href={ {
          pathname: '/',
          query: { tab: 'HIT' }
        } }
        className={ `${ s.hearts } ${ activeItem === 2 && s.active }` }
        onClick={ () => setActiveItem( 2 ) }

      >

        <span className={ `p` }>Хит</span>
        <MiniHeartsImage />


      </Link>


      <Link

        href={ {
          pathname: '/',
          query: { tab: 1 }
        } }
        scroll={ false }
        className={ `${ activeItem === 3 && s.active }` }
        onClick={ () => setActiveItem( 3 ) }

      >

        <span className="p">Торты</span>

      </Link>

      <Link href={ {
        pathname: '/',
        query: { tab: 2 }
      } }
        scroll={ false } className={ `${ activeItem === 4 && s.active }` } onClick={ () => setActiveItem( 4 ) }>

        <span className="p">Пирожные</span>

      </Link>


      <Link href={ {
        pathname: '/',
        query: { tab: 3 }
      } }
        scroll={ false } className={ `${ activeItem === 5 && s.active }` } onClick={ () => setActiveItem( 5 ) }>

        <span className="p">Печенье</span>

      </Link>


    </ul>

  )

}