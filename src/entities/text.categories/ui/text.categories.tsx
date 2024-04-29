import Link from "next/link"
import { MiniStarImage } from "@/app/_images/mini.star";
import { MiniHeartsImage } from "@/app/_images/mini.hearts";
import s from './text.categories.module.scss'
import { FC } from "react";

export const TextCategories:FC<{ className?: string,  listType?: boolean }> = ({ className, listType }) => {

  return (

    <ul className={`${ s.tabs } ${ className } ${ listType && s.listType }`}>

      { !listType && <li>

        <Link className="p" href={ '/' }>Все</Link>

      </li> }

      <li className={ s.stars }>

        <Link className={`p`} href={ '/' }>Акции</Link>
        <MiniStarImage />

      </li>

      <li className={ s.hearts }>

        <Link className={`p`} href={ '/' }>Хит</Link>
        <MiniHeartsImage />


      </li>


      <li>

        <Link className="p" href={ '/' }>Торты</Link>

      </li>

      <li>

        <Link className="p" href={ '/' }>Пирожные</Link>

      </li>


      <li>

        <Link className="p" href={ '/' }>Печенье</Link>

      </li>


    </ul>

  )

}