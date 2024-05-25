import Image from "next/image";

import s from './home.view.module.scss'

import { H1, P } from "@/shared/ui.kit";

import { StickImage } from "@/app/_images/stick";
import { HeartImage } from "@/app/_images/heart";
import { LongArrowImage } from "@/app/_images/long.arrow";
import { DiscolorImage } from "@/app/_images/discolor";
import { WaveUnderlining } from '@/app/_images/wave.underlining';
import { BannerCategories } from "@/entities/banner.categories";
import { FC } from "react";
import { LongArrowImageFrame2 } from "@/app/_images/long.arrow.frame2";
import { LongArrowImageFrame3 } from "@/app/_images/long.arrow.frame3";
import { HoverAnimatedLink } from "@/shared/ui.kit/animate";
import { Catalog } from "@/widgets/catalog";
import type { IProduct } from "@/shared/api";
import { HomeMap } from "@/widgets/home.map";

interface IHomeViewProps {
  productsList: IProduct[]
  tab?: string
}

export const HomeView: FC<IHomeViewProps> = ( { productsList, tab } ) => {


  return (

    <>

      <main className={ `${ s.home } container` }>

        <div className={ s.banner }>

          <img src={ '/images/home_banner.png' } alt="home banner" />
          <Image fill src={ '/images/home_banner_mobile.svg' } alt="home banner" />

        </div>

        <BannerCategories isGrid />

        <Catalog tab = { tab } list={ productsList } />

        <HoverAnimatedLink wrapperClassName={ `${ s.all_link_icon } flex items-center` } className={ s.all_link } animateClassName={ s.icon } href="/catalog" frames={ [

          <LongArrowImage key={ 1 } />,
          <LongArrowImageFrame2 key={ 2 } />,
          <LongArrowImageFrame3 key={ 3 } />,

        ] }>
          Смотреть все десерты
        </HoverAnimatedLink>


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

        <HoverAnimatedLink wrapperClassName={ ` flex items-center` } className={ s.more_link } animateClassName={ s.more_link_icon } href="/" frames={ [

          <LongArrowImage className={ s.more_link_icon } key={ 1 } />,
          <LongArrowImageFrame2 className={ s.more_link_icon } key={ 2 } />,
          <LongArrowImageFrame3 className={ s.more_link_icon } key={ 3 } />,

        ] }>
          Подробнее
        </HoverAnimatedLink>


      </div>

      <div className={ `${ s.location } container` }>

        <H1 className={ s.title }>где нас можно найти</H1>

        <div className={ s.info }>

          <div className={ s.text }>
            <span className={ s.name }>Адрес</span>
            <P className={ s.address }>Москва, 3-я улица Строителей,  25 <br /> с 10:00 до 21:00</P>



            <HoverAnimatedLink className={ s.link } animateClassName={ s.icon } href="/" frames={ [

              <LongArrowImage className={ s.icon } key={ 1 } />,
              <LongArrowImageFrame2 className={ s.icon } key={ 2 } />,
              <LongArrowImageFrame3 className={ s.icon } key={ 3 } />,

            ] }>
              Подробнее
            </HoverAnimatedLink>


          </div>

          <HomeMap />

        </div>

      </div>

    </>

  )

}