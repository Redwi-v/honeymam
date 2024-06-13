'use client'
import { BreadCrumbs, H2, ICrumbItem,} from "@/shared/ui.kit"
import { NextPage } from "next"
import s from './favorites.module.scss'
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { useQuery } from "react-query";
import { ProductsApi } from "@/shared/api";
import { Catalog } from "@/widgets/catalog";

interface ContactsPageProps {

}


const breadCrumbsList: ICrumbItem[] = [

  {
    href: '/',
    title: 'Главная',
  },
  {
    href: '/about.us',
    title: 'О нас',
  },

]

const ContactsPage: NextPage<ContactsPageProps> = props => {


  const {  data, refetch } = useQuery({
    queryKey: 'favorites',
    queryFn: () => ProductsApi.getFavorites({}),
  })

  console.log(data);
  

  
  return (

    <section className="carcass" >

      <Header />

      <main className={ `${ s.content } container` }>

        <BreadCrumbs list={breadCrumbsList}/>
        <H2 className={ `${ s.title } text-left` }>ИЗБРАННОЕ</H2>
        { data?.data?.results && <Catalog listClassName={ s.catalog_list } header={false} list={data?.data.results}/> }

      </main>



      <Footer />


    </section>


  )

}

export default ContactsPage
