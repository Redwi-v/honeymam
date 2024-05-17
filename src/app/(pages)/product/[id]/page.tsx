import { IProduct, ProductsApi } from "@/shared/api";
import { H2, ICrumbItem } from "@/shared/ui.kit";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { NextPage } from "next";

import s from './product.module.scss'
import { Preview } from "./(preview)";
import { Controls, Info } from "./(info)";
import { FC } from "react";
import WeHaveSlider from "./(we.have)";





async function getData( id: number ) {

  const productPromise = ProductsApi.getProductById( { id } )
  const ratingPromise = ProductsApi.getProductRating( { id } )
  const productsListPromise = ProductsApi.getList({})

  const [ resProduct, resRating, productsListRes ] = await Promise.all( [ productPromise, ratingPromise, productsListPromise ] )


  if ( resProduct.statusText !== 'OK' || resRating.statusText !== 'OK' ) {
    throw new Error( 'Failed to fetch data' )
  }

  return {
    resProduct,
    resRating,
    productsListRes,
  }

}

interface IProductPageProps {

  params: {

    id: string

  }

}

const ProductPage: NextPage<IProductPageProps> = async ( { params } ) => {

  const { id } = params
  const { resProduct, resRating, productsListRes } = await getData( +id )

  const { images, videos, badge } = resProduct.data

  const breadCrumbsList: ICrumbItem[] = [

    {
      href: '/',
      title: 'Главная',
    },
    {
      href: '/catalog',
      title: 'Каталог',
    },
    {
      href: '/catalog/product',
      title: resProduct.data.title,
    },
  
  ]

  return (

    <section className={ `carcass with_bread_crumbs` }>

      <Header breadCrumpsList={ breadCrumbsList } />


      <main className={ `${ s.content } container` }>

        <Preview type={ badge } images={ images } videos={ videos } />

        <Info { ...resProduct.data } reviews={ resRating.data } />


      </main>

      <WeHaveSlider  list={productsListRes.data.results} />

      <Footer />

    </section>

  )

}









export default ProductPage