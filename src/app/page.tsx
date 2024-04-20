'use client'
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header"
import Image from "next/image";

import s from './home.module.scss'
import Link from "next/link";
import { CakeImage } from "./_images/cake";
import { MiniCakesImage } from "./_images/mini.cakes";
import { CookieImage } from "./_images/сookie";
import { CandiesImage } from "./_images/candies";
import { H2 } from "@/shared/ui.kit";
import { H1, P } from '../shared/ui.kit/text/ui/text';
import { MiniStarImage } from "./_images/mini.star";
import { MiniHeartsImage } from "./_images/mimi.hearts";
import { useState } from "react";
import { MinusImage } from "./_images/minus";
import { PlusImage } from "./_images/plus";
import { cssIf } from "@/shared/scripts";
import { StickImage } from "./_images/stick";
import { HeartImage } from "./_images/heart";
import { LongArrowImage } from "./_images/long.arrow";
import { DiscolorImage } from "./_images/discolor";
import { WaveUnderlining } from './_images/wave.underlining';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

export default function Home() {



  return (

    <section className="carcass">

      <Header />

      <main className={ `${ s.home } container` }>

        <div className={ s.banner }>

          <Image fill src={ '/images/home_banner.jpg' } alt="home banner" />
          <Image fill src={ '/images/home_banner_mobile.jpg' } alt="home banner" />

        </div>

        <ul className={ s.categories }>

          <li className={ s.category }>

            <Link href={ '/' }>

              <H2>Торты</H2>
              <CakeImage />

            </Link>

          </li>

          <li className={ s.category }>

            <Link href={ '/' }>

              <H2>Пирожные</H2>
              <MiniCakesImage />

            </Link>

          </li>

          <li className={ s.category }>

            <Link href={ '/' }>

              <H2>Печенье</H2>
              <CookieImage />

            </Link>

          </li>

          <li className={ s.category }>

            <Link href={ '/' }>

              <H2>Другое</H2>
              <CandiesImage />

            </Link>

          </li>

        </ul>

        <div className={ s.catalog }>

          <H1 className={ s.title }>Каталог вкусных десертов</H1>

          <ul className={ s.tabs }>

            <li>

              <Link className="p" href={ '/' }>Все</Link>

            </li>

            <li>

              <Link className="p" href={ '/' }>Акции</Link>
              <MiniStarImage />

            </li>

            <li>

              <Link className="p" href={ '/' }>Хит</Link>
              <MiniHeartsImage />


            </li>


            <li>

              <Link className="p" href={ '/' }>Торты</Link>

            </li>

            <li>

              <Link className="p" href={ '/' }>Пирожные</Link>

            </li>


            <li>

              <Link className="p" href={ '/' }>Печенье</Link>

            </li>


          </ul>

          <ul className={ s.list }>

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

        </div>

        <Link className={ s.all_link } href={ '/' }>
          <span className="h2">Смотреть все десерты</span>
          <LongArrowImage />
        </Link>

        <div className={ s.contacts_banner }>
          <Image fill src={ '/images/home_contacts.jpg' } alt="home contacts" />

          <div className={ s.text } >
            <P>
              Подписывайтесь на нас в <a href="/">VK</a>, <a href="/">telegram</a> и <a href="/">Instagram</a> <a href=""></a>* там мы постим спец.предложения и другие крутые <br /> штуки! :)
            </P>
            <P>
              *Instagram принадлежит компании Meta, признанной экстремистской организацией и запрещенной в РФ
            </P>

          </div>
        </div>

      </main>

      <div className={ s.about }>

        <Image className={ s.bg } fill src={ '/images/about_banner.jpg' } alt="about" />

        <H1 className={ s.title }>
          <DiscolorImage className={ s.discolor } />
          <WaveUnderlining className={ s.wave_underlining } />
          Стремимся к безупречности во всем, что делаем, и никогда не останавливаемся на достигнутом
        </H1>

        <P className={ s.subtitle }>
          <StickImage className={ s.stick } />
          <HeartImage className={ s.heart } />
          Времена меняются, но с HONEYMAM можно окунуться в атмосферу теплых воспоминаний и отведать те самые ”десерты из детства
        </P>

        <Link className={ s.more_link } href={ '/' }>
          <span className="h2">Подробнее</span>
          <LongArrowImage />
        </Link>

      </div>

      <div className={ `${ s.location } container` }>

        <H1 className={ s.title }>где нас можно найти</H1>

        <div className={ s.info }>

          <div className={ s.text }>
            <span className={ s.name }>Адрес</span>
            <P className={ s.address }>Москва, 3-я улица Строителей,  25 <br /> с 10:00 до 21:00</P>

            <Link className={ s.link } href={ '/' }>
              <span className="h2">Подробнее</span>
              <LongArrowImage />
            </Link>
          </div>

          <YMaps >
            <div className={ s.map }>
              <Map width="100%" height="100%" defaultState={ { center: [ 55.685031, 37.537362 ], zoom: 15 } } >
                <Placemark geometry={ [ 55.685031, 37.537362 ] } />
              </Map>
            </div>
          </YMaps>

        </div>

      </div>

      <Footer />

    </section>

  );
}


export const Counter = () => {

  const [ count, setCount ] = useState( 0 )

  return (

    <div className={ `${ s.counter } ${ cssIf( count !== 0, s.active ) }` }>

      <button onClick={ () => setCount( prev => prev - 1 <= 0 ? 0 : prev - 1 ) } className={ s.button }>

        <MinusImage />


      </button>

      <span className={ s.count }>{ count }</span>

      <button onClick={ () => setCount( prev => prev + 1 ) } className={ s.button }>

        <PlusImage />

      </button>

    </div>

  )

}