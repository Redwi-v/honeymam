import { ProductsApi } from "@/shared/api";
import { HomeView } from "@/views/home.view";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header"


export default async function Home() {

  const { productListData } = await getData()

  return (

    <section className="carcass">

      <Header />

      <HomeView productsList={ productListData.results } />
      

      <Footer />

    </section>

  );

}

async function getData() {

  const res = await ProductsApi.getList( {} )

  if ( res.status !== 200 ) {
    throw new Error( 'Failed to fetch data' )
  }

  return {
    productListData: res.data
  }

}


