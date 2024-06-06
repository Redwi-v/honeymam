import type { Metadata } from "next";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { BreadCrumbs, type ICrumbItem } from "@/shared/ui.kit";


export const metadata: Metadata = {

  title: "Home - HONEYMAM",
  description: "Generated by create next app",

};




export default function RootLayout( { children }: Readonly<{ children: React.ReactNode }> ) {

  return (

    <section className="carcass">


      <Header />
      <main className="main">
        
        { children }
        
      </main>
      <Footer />


    </section>

  )

}