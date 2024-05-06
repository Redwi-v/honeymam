'use client'
import Link from "next/link"
import { MiniStarImage } from "@/app/_images/mini.star";
import { MiniHeartsImage } from "@/app/_images/mini.hearts";
import s from './text.categories.module.scss'
import { FC, useState } from "react";


export const TextCategories:FC<{ className?: string,  listType?: boolean }> = ({ className, listType }) => {


  const [ activeItem, setActiveItem ] = useState( 0 )


  return (

    <ul className={`${ s.tabs } ${ className } ${ listType && s.listType }`}>

      { !listType && <li className={ `${ activeItem === 0 && s.active }` } onClick={ () => setActiveItem( 0 ) }>

        <span className="p">Все</span>

      </li> }

      <li className={ `${ s.stars } ${ activeItem === 1 && s.active }` } onClick={ () => setActiveItem( 1 ) }>

        <span className={ `p` }>Акции</span>
        <MiniStarImage />

      </li>

      <li className={ `${ s.hearts } ${ activeItem === 2 && s.active }` } onClick={ () => setActiveItem( 2 ) }>

        <span className={ `p` }>Хит</span>
        <MiniHeartsImage />


      </li>


      <li className={ `${ activeItem === 3 && s.active }` } onClick={ () => setActiveItem( 3 ) }>

        <span className="p">Торты</span>

      </li>

      <li className={ `${ activeItem === 4 && s.active }` } onClick={ () => setActiveItem( 4 ) }>

        <span className="p">Пирожные</span>

      </li>


      <li className={ `${ activeItem === 5 && s.active }` } onClick={ () => setActiveItem( 5 ) }>

        <span className="p">Печенье</span>

      </li>


    </ul>

  )

}