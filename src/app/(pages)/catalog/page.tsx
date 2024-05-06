import { NextPage } from "next"
import s from '../../home.module.scss'
import { StickImage } from "@/app/_images/stick"
import { H1, H2, P } from '../../../shared/ui.kit/text/ui/text';
import { HeartImage } from "@/app/_images/heart";
import Image from "next/image";
import { MiniCakesImage } from "@/app/_images/mini.cakes";
import { CookieImage } from "@/app/_images/сookie";
import Link from "next/link";
import { CakeImage } from "@/app/_images/cake";
import { CandiesImage } from "@/app/_images/candies";
import { Counter, ICrumbItem } from "@/shared/ui.kit";
import { BannerCategories } from "@/entities/banner.categories";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { Catalog } from "@/widgets/catalog";
import { ProductsApi } from "@/shared/api";

interface CatalogPageProps {

}

const breadCrumbsList: ICrumbItem[] = [

  {
    href: '/',
    title: 'Главная',
  },
  {
    href: '/catalog',
    title: 'Каталог',
  },

]

async function getData() {

  const resActions = await ProductsApi.getList( { badge: 'PROMOTION' } )
  const resHIT = await ProductsApi.getList( { badge: 'HIT' } )

  if ( resActions.status !== 200 || resHIT.status !== 200 ) {
    throw new Error( 'Failed to fetch data' )
  }

  return {

    productListActions: resActions.data.results,
    productListHits: resHIT.data.results,

  }

}


async function CatalogPage( props: CatalogPageProps ) {

  const { productListActions, productListHits } = await getData()

  return (

    <div className={ `${ s.catalog }` }>

      <Header breadCrumpsList={ breadCrumbsList } />


      <H1 className={ `${ s.title } mt-24 text-left container` }>Каталог вкусных десертов</H1>
      <BannerCategories classList={ `container` } list />

      <section className={ `mb-120 container` }>


        <H2 className={ `${ s.title } mt-120 text-left` }>Акции</H2>


        <Catalog header={ false } list={ productListActions } />

        <H2 className={ `${ s.title } mt-120 text-left` }>Наши хиты</H2>

        <Catalog header={ false } list={ productListHits } />


      </section>
      <Footer />

    </div>

  )

}

export default CatalogPage
