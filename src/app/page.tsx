import { ProductsApi } from "@/shared/api";
import { HomeView } from "@/views/home.view";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header"


export default async function Home ( props: { searchParams: {tab: string} } ) {

  const { productListData } = await getData( props.searchParams.tab )
  

  return (

    <section className="carcass">

      <Header />

      <HomeView tab = { props.searchParams.tab } productsList={ productListData.results } />
      
      <Footer />

    </section>

  );

}

async function getData( tab: string ) {

  const params:any = {

  }

  if ( !Number(tab) ) {
    params.badge = tab
  }
  if ( !params.badge ) {
    params.categories = tab
  }
  console.log(params)

  const res = await ProductsApi.getList( params )

  if ( res.status !== 200 ) {
    throw new Error( 'Failed to fetch data' )
  }

  return {
    productListData: res.data
  }

}


