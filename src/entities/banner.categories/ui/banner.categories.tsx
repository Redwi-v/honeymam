import { H2 } from "@/shared/ui.kit";
import Link from "next/link";

import { CakeImage } from "@/app/_images/cake";
import { MiniCakesImage } from "@/app/_images/mini.cakes";
import { CookieImage } from "@/app/_images/сookie";
import { CandiesImage } from "@/app/_images/candies";
import { FC } from "react";


import s from './banner.categories.module.scss'
import { cssIf } from "@/shared/scripts";
import async from '../../../app/page';
import { CategoriesApi, ProductsApi } from "@/shared/api";

async function getData() {

  const res = await CategoriesApi.getList()

  if ( res.status !== 200 ) {
    throw new Error( 'Failed to fetch data' )
  }

  return {
    categories: res.data
  }

}

export async function BannerCategories( { isGrid, list, classList }: { isGrid?: boolean, list?: boolean, classList?: string } ) {

  const { categories } = await getData()

  return (

    <ul className={ `${ s.categories } ${ cssIf( isGrid, s.grid ) } ${ cssIf( list, s.list ) } ${ classList }` }>

      { categories.results.reverse().map( category => (

        <li key={ category.id } className={ s.category }>

          <Link href={ `/catalog/${ category.id }` }>

            <H2>{ category.title }</H2>
            { category.id === 1 && <CakeImage /> }
            { category.id === 2 && <MiniCakesImage /> }
            { category.id === 3 && <CookieImage /> }
            { category.id === 4 && <CandiesImage /> }

          </Link>

        </li>

      ) ) }


      {/* <li className={ s.category }>

      <Link href={ '/' }>

        <H2>Пирожные</H2>


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

    </li> */}

    </ul>
  )

}