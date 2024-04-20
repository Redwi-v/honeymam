import { Button, H1, H2 } from "@/shared/ui.kit";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import Image from "next/image";

export default function NotFound() {

  return (

    <section className="carcass with_bread_crumbs">


      <Header />

      <main className="main not_found">

        {/* <Image width={ '572' } height={ '614' } alt="crumbs" className="not_found_crumbs1" src='/images/crumbs1.png' />
        <Image width={ '735' } height={ '789' } alt="crumbs" className="not_found_crumbs2" src='/images/crumbs2.png' /> */}

        <div className="not_found_crumbs1">

          <Image fill alt="crumbs" src='/images/crumbs1.png' />

        </div>

        <div className="not_found_crumbs2">

          <Image fill alt="crumbs" src='/images/crumbs2.png' />

        </div>


        <div className='not_found_image'>

          <Image fill src='/images/404.png' alt="404" />

        </div>

        <H1 className="not_found_title">Упс!</H1>
        <H2 className="not_found_sub_title">страница не найдена</H2>
        <Button href='/'>На главную</Button>

      </main>

      <Footer />


    </section>

  );

}
