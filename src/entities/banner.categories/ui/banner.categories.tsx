import { H2 } from "@/shared/ui.kit";
import Link from "next/link";

import { CakeImage } from "@/app/_images/cake";
import { MiniCakesImage } from "@/app/_images/mini.cakes";
import { CookieImage } from "@/app/_images/сookie";
import { CandiesImage } from "@/app/_images/candies";
import { FC } from "react";


import s from './banner.categories.module.scss'
import { cssIf } from "@/shared/scripts";

export const BannerCategories:FC<{ isGrid?:boolean, list?:boolean, classList?: string }> = ({ isGrid, list, classList }) => (

  <ul className={`${ s.categories } ${ cssIf( isGrid, s.grid ) } ${ cssIf( list, s.list) } ${ classList }`}>

    <li className={ s.category }>

      <Link href={ '/catalog/1' }>

        <H2>Торты</H2>
        <CakeImage />

      </Link>

    </li>

    <li className={ s.category }>

      <Link href={ '/' }>

        <H2>Пирожные</H2>
        <MiniCakesImage />

      </Link>

    </li>

    <li className={ s.category }>

      <Link href={ '/' }>

        <H2>Печенье</H2>
        <CookieImage />

      </Link>

    </li>

    <li className={ s.category }>

      <Link href={ '/' }>

        <H2>Другое</H2>
        <CandiesImage />

      </Link>

    </li>

  </ul>

)