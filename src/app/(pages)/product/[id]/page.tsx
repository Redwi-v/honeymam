import { ProductsApi } from "@/shared/api";
import { BreadCrumbs, ICrumbItem } from "@/shared/ui.kit";
import { Header } from "@/widgets/header";
import { NextPage } from "next";

import s from './product.module.scss'
import { Preview } from "./(preview)";
import { Info } from "./(info)";
import WeHaveSlider from "./(we.have)";

async function getData( id: number ) {

  const productPromise = ProductsApi.getProductById( { id } )
  const ratingPromise = ProductsApi.getProductRating( { id } )
  const productsListPromise = ProductsApi.getList( {} )

  const [ resProduct, resRating, productsListRes ] = await Promise.all( [ productPromise, ratingPromise, productsListPromise ] )

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

  const { images, videos, badge, image } = resProduct.data

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

    <>

      <Header />

      <main className={ `container` }>

        <BreadCrumbs list={breadCrumbsList}/>
        <div className={ s.content }>

          <Preview type={ badge } images={ [ { id: 13914241459786123, image: image, product: +id }, ...images ] } videos={ videos } />

          <Info { ...resProduct.data } reviews={ resRating.data } />

        </div>

      </main>

      <WeHaveSlider list={ productsListRes.data.results } />

    </>

  )

}









export default ProductPage