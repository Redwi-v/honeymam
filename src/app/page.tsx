'use client'
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header"
import Image from "next/image";

import s from './home.module.scss'
import Link from "next/link";

import { Counter, H2 } from "@/shared/ui.kit";
import { H1, P } from '../shared/ui.kit/text/ui/text';


import { StickImage } from "./_images/stick";
import { HeartImage } from "./_images/heart";
import { LongArrowImage } from "./_images/long.arrow";
import { DiscolorImage } from "./_images/discolor";
import { WaveUnderlining } from './_images/wave.underlining';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { BannerCategories } from "@/entities/banner.categories";
import axios from "axios";
import { TextCategories } from "@/entities/text.categories";
import { useEffect, useState } from "react";
import { LongArrowImageFrame2 } from "./_images/long.arrow.frame2";
import { LongArrowImageFrame3 } from "./_images/long.arrow.frame3";
import { Animate } from "@/shared/ui.kit/animate";

export default function Home() {

  useEffect( () => {

    axios.get( 'https://honeymam.store/rest/products/', {
      headers: {
        "Http-App-ID": "537dd91c-4729-4f26-8e6e-20c49b9d6551",
        withCredentials: true,
      }
    } )

  }, [] )

  const [ firstArrowActive, setFirstArrowActive ] = useState( false )
  const [ secondArrowActive, setSecondArrowActive ] = useState( false )

  return (

    <section className="carcass">

      <Header />

      <main className={ `${ s.home } container` }>

        <div className={ s.banner }>

          <Image fill src={ '/images/home_banner.svg' } alt="home banner" />
          <Image fill src={ '/images/home_banner_mobile.svg' } alt="home banner" />

        </div>

        <BannerCategories isGrid />

        <div className={ s.catalog }>

          <H1 className={ s.title }>Каталог вкусных десертов</H1>

          <TextCategories />

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

                    <P className={ s.price_value }>1 000 ₽</P>
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
                  <Image src={ '/images/testData/hit.svg' } alt="action" fill />
                </div>

              </div>

              <div className={ s.main_info }>

                <H2 className={ s.item_title }>Наполеон классический</H2>

                <P className={ s.item_description }>
                  Бисквит, клубника, крем из взбитых сливок, мёед . 2 кг
                </P>

                <div className={ s.bottom }>

                  <div className={ s.price }>

                    <P className={ s.price_value }>1 000 ₽</P>

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

                    <P className={ s.price_value }>1 000 ₽</P>

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

                    <P className={ s.price_value }>1 000 ₽</P>
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

                    <P className={ s.price_value }>1 000 ₽</P>
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

                    <P className={ s.price_value }>1 000 ₽</P>
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

                    <P className={ s.price_value }>1 000 ₽</P>
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

                    <P className={ s.price_value }>1 000 ₽</P>
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

        <Link onMouseLeave={ () => setFirstArrowActive( false ) } onMouseEnter={ () => setFirstArrowActive( true ) } className={ s.all_link } href={ '/' }>
          <span className="h2">Смотреть все десерты</span>

          <Animate

            className={ s.icon }
            wrapperClass={ `${ s.more_link_icon } flex items-center` }
            isActive={ firstArrowActive }
            frames={ [

              <LongArrowImage key={ 1 } />,
              <LongArrowImageFrame2 key={ 2 } />,
              <LongArrowImageFrame3 key={ 3 } />,

            ] }

          />
        </Link>

        <div className={ s.contacts_banner }>
          <Image className={ s.desk_banner } fill src={ '/images/home_contacts.svg' } alt="home contacts" />
          <Image className={ s.mobile_banner } fill src={ '/images/home_contacts_mobile.svg' } alt="home contacts" />

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

        <Image className={ s.bg } fill src={ '/images/about_banner.svg' } alt="about" />
        <Image className={ s.bg_mobile } fill src={ '/images/about_banner_mobile.svg' } alt="about" />

        <H1 className={ s.title }>
          <DiscolorImage className={ s.discolor } />
          <WaveUnderlining className={ s.wave_underlining } />
          Стремимся <br className="mobile" /> к безупречности во всем, что делаем, и никогда не останавливаемся на достигнутом
        </H1>

        <P className={ s.subtitle }>
          <StickImage className={ s.stick } />
          <HeartImage className={ s.heart } />
          Времена меняются, но с HONEYMAM можно окунуться в атмосферу теплых воспоминаний и отведать те самые десерты из детства
        </P>

        <Link onMouseLeave={ () => setSecondArrowActive( false ) } onMouseEnter={ () => setSecondArrowActive( true ) } className={ s.more_link } href={ '/' }>
          <span className="h2">Подробнее</span>

          <Animate

            className={ s.icon }
            wrapperClass={ `${ s.more_link_icon } flex items-center` }
            isActive={ secondArrowActive }
            frames={ [

              <LongArrowImage key={ 1 } />,
              <LongArrowImageFrame2 key={ 2 } />,
              <LongArrowImageFrame3 key={ 3 } />,

            ] }

          />

        </Link>

      </div>

      <div className={ `${ s.location } container` }>

        <H1 className={ s.title }>где нас можно найти</H1>

        <div className={ s.info }>

          <div className={ s.text }>
            <span className={ s.name }>Адрес</span>
            <P className={ s.address }>Москва, 3-я улица Строителей,  25 <br /> с 10:00 до 21:00</P>


            <Link onMouseLeave={ () => setSecondArrowActive( false ) } onMouseEnter={ () => setSecondArrowActive( true ) } className={ `${ s.link }` } href={ '/' }>
              <span className="h2">Подробнее</span>

              <Animate

                className={ s.icon }
                wrapperClass={ `${ s.more_link_icon } flex items-center` }
                isActive={ secondArrowActive }
                frames={ [

                  <LongArrowImage key={ 1 } />,
                  <LongArrowImageFrame2 key={ 2 } />,
                  <LongArrowImageFrame3 key={ 3 } />,

                ] }

              />

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

