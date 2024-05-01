import { NextPage } from "next"
import s from '../../../home.module.scss'
import { StickImage } from "@/app/_images/stick"
import { H1, H2, ICrumbItem, P } from '@/shared/ui.kit';
import { HeartImage } from "@/app/_images/heart";
import Image from "next/image";
import { MiniCakesImage } from "@/app/_images/mini.cakes";
import { CookieImage } from "@/app/_images/сookie";
import Link from "next/link";
import { CakeImage } from "@/app/_images/cake";
import { CandiesImage } from "@/app/_images/candies";
import { Counter } from "@/shared/ui.kit";
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
  {
    href: '/catalog',
    title: 'Торты',
  },

]

const CatalogPage: NextPage<CatalogPageProps> = props => {

  return (

    <>
      <Header breadCrumpsList={ breadCrumbsList } />

      <div className={ `${ s.catalog }` }>

        <H1 className={ `${ s.title } mt-24 text-left container` }>Торты</H1>

        <section className={ `container mb-120` }>

          <ul className={ s.list }>

            <li className={ s.item }>

              <div className={ s.preview }>

                <Image fill src='/images/cake.jpg' alt="product preview" />

                <button className={ s.like }>
                  <HeartImage />
                </button>

                <div className={ s.type }>
                  <Image src={ '/images/testData/action.svg' } alt="action" fill />
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
                  <Image src={ '/images/testData/action.svg' } alt="action" fill />
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
                  <Image src={ '/images/testData/action.svg' } alt="action" fill />
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
      </div>
      <Footer />

    </>

  )

}

export default CatalogPage
