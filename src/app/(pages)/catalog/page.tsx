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

const CatalogPage: NextPage<CatalogPageProps> = props => {

  return (

    <div className={`${ s.catalog }`}>
      <Header breadCrumpsList={ breadCrumbsList } />


      <H1 className={ `${ s.title } mt-24 text-left container` }>Каталог вкусных десертов</H1>
      <BannerCategories classList={`container`} list />
      
      <section className={ `mb-120 container` }>


        <H2 className={ `${ s.title } mt-120 text-left` }>Акции</H2>


        <ul className={ s.list }>

          <li className={ s.item }>

            <div className={ s.preview }>

              <Image fill src='/images/cake.jpg' alt="product preview" />

              <button className={ s.like }>
                <HeartImage />
              </button>

              <div className={ s.type }>
                <Image src={ '/images/testData/action.png' } alt="action" fill />
              </div>

            </div>

            <div className={ s.main_info }>

              <H2 className={ s.item_title }>Наполеон классический</H2>

              <P className={ s.item_description }>
                Бисквит, клубника, крем из взбитых сливок, мёед . 2 кг
              </P>

              <div className={ s.bottom }>

                <div className={ s.price }>

                  <P className={ s.price }>1 000 ₽</P>
                  <P className={ s.old_price }>
                    <StickImage />
                    1 600 ₽
                  </P>

                </div>

                <Counter />

              </div>

            </div>

          </li>

          <li className={ s.item }>

            <div className={ s.preview }>

              <Image fill src='/images/cake.jpg' alt="product preview" />

              <button className={ s.like }>
                <HeartImage />
              </button>

              <div className={ s.type }>
                <Image src={ '/images/testData/action.png' } alt="action" fill />
              </div>

            </div>

            <div className={ s.main_info }>

              <H2 className={ s.item_title }>Наполеон классический</H2>

              <P className={ s.item_description }>
                Бисквит, клубника, крем из взбитых сливок, мёед . 2 кг
              </P>

              <div className={ s.bottom }>

                <div className={ s.price }>

                  <P className={ s.active_price }>1 000 ₽</P>
                  <P className={ s.old_price }>
                    <StickImage />
                    1 600 ₽
                  </P>

                </div>

                <Counter />

              </div>

            </div>

          </li>

          <li className={ s.item }>

            <div className={ s.preview }>

              <Image fill src='/images/cake.jpg' alt="product preview" />

              <button className={ s.like }>
                <HeartImage />
              </button>

              <div className={ s.type }>
                <Image src={ '/images/testData/action.png' } alt="action" fill />
              </div>

            </div>

            <div className={ s.main_info }>

              <H2 className={ s.item_title }>Наполеон классический</H2>

              <P className={ s.item_description }>
                Бисквит, клубника, крем из взбитых сливок, мёед . 2 кг
              </P>

              <div className={ s.bottom }>

                <div className={ s.price }>

                  <P className={ s.price }>1 000 ₽</P>
                  <P className={ s.old_price }>
                    <StickImage />
                    1 600 ₽
                  </P>

                </div>

                <Counter />

              </div>

            </div>

          </li>

        </ul>

        <H2 className={ `${ s.title } mt-120 text-left` }>Наши хиты</H2>

        <ul className={ s.list }>


          <li className={ s.item }>

            <div className={ s.preview }>

              <Image fill src='/images/cake.jpg' alt="product preview" />

              <button className={ s.like }>
                <HeartImage />
              </button>

              <div className={ s.type }>
                <Image src={ '/images/testData/hit.png' } alt="action" fill />
              </div>

            </div>

            <div className={ s.main_info }>

              <H2 className={ s.item_title }>Наполеон классический</H2>

              <P className={ s.item_description }>
                Бисквит, клубника, крем из взбитых сливок, мёед . 2 кг
              </P>

              <div className={ s.bottom }>

                <div className={ s.price }>

                  <P className={ s.price }>1 000 ₽</P>
                  <P className={ s.old_price }>
                    <StickImage />
                    1 600 ₽
                  </P>

                </div>

                <Counter />

              </div>

            </div>

          </li>

          <li className={ s.item }>

            <div className={ s.preview }>

              <Image fill src='/images/cake.jpg' alt="product preview" />

              <button className={ s.like }>
                <HeartImage />
              </button>

              <div className={ s.type }>
                <Image src={ '/images/testData/hit.png' } alt="action" fill />
              </div>

            </div>

            <div className={ s.main_info }>

              <H2 className={ s.item_title }>Наполеон классический</H2>

              <P className={ s.item_description }>
                Бисквит, клубника, крем из взбитых сливок, мёед . 2 кг
              </P>

              <div className={ s.bottom }>

                <div className={ s.price }>

                  <P className={ s.active_price }>1 000 ₽</P>
                  <P className={ s.old_price }>
                    <StickImage />
                    1 600 ₽
                  </P>

                </div>

                <Counter />

              </div>

            </div>

          </li>

          <li className={ s.item }>

            <div className={ s.preview }>

              <Image fill src='/images/cake.jpg' alt="product preview" />

              <button className={ s.like }>
                <HeartImage />
              </button>

              <div className={ s.type }>
                <Image src={ '/images/testData/hit.png' } alt="action" fill />
              </div>

            </div>

            <div className={ s.main_info }>

              <H2 className={ s.item_title }>Наполеон классический</H2>

              <P className={ s.item_description }>
                Бисквит, клубника, крем из взбитых сливок, мёед . 2 кг
              </P>

              <div className={ s.bottom }>

                <div className={ s.price }>

                  <P className={ s.price }>1 000 ₽</P>
                  <P className={ s.old_price }>
                    <StickImage />
                    1 600 ₽
                  </P>

                </div>

                <Counter />

              </div>

            </div>

          </li>

        </ul>

      </section>
      <Footer />

    </div>

  )

}

export default CatalogPage
