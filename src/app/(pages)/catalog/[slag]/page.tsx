import { NextPage } from "next";
import s from '../../../home.module.scss';
import { H1, ICrumbItem } from '@/shared/ui.kit';
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { CategoriesApi, ProductsApi } from "@/shared/api";
import { Catalog } from "@/widgets/catalog";


interface IParams {
  slag: string
  categoryName: string
}
interface CatalogPageProps {

  params: IParams

}


export async function generateStaticParams(): Promise<IParams[]> {

  const categoriesRes = await CategoriesApi.getList()
  return categoriesRes.data.results.map( item => ( { slag: String( item.id ), categoryName: item.title } ) )

}

async function getData( categories: string ) {

  const res = await ProductsApi.getList( {} )

  if ( res.status !== 200 ) {
    throw new Error( 'Failed to fetch data' )
  }

  return {

    productsData: res.data,

  }

}

const CatalogPage: NextPage<CatalogPageProps> = async props => {

  const listData = await getData( props.params.slag )


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
      href: '/catalog',
      title: props.params.categoryName || '',
    },

  ]

  return (

    <>

      <Header breadCrumpsList={ breadCrumbsList } /> 

      <div className={ `${ s.catalog }` }>

        <H1 className={ `${ s.title } mt-24 text-left container` }>{ props.params.categoryName || '' }</H1>

        <section className={ `container mb-120` }>

          <Catalog header={ false } list={ listData.productsData.results } /> 

        </section>
      </div>
      <Footer />

    </>

  )

}

export default CatalogPage
