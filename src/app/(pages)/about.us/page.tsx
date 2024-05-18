'use client'
import { H1, H2, ICrumbItem, P } from "@/shared/ui.kit"
import { NextPage } from "next"
import s from './about.us.module.scss'
import { Map, YMaps } from '@pbe/react-yandex-maps';
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import Image from "next/image";
import { FullImagePreview, IActiveItem } from "../product/[id]/(preview)";
import { useState } from "react";

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

  const [ activeItem, setActiveItem ] = useState< IActiveItem >({

    id: 0,
    src: '/images/aboutUs/gallery1.jpg',
    type: 'image',

  })

  const [ fullPreviewIsOpen, setFullPreviewIsOpen ] = useState( false )

  const openFullPreview = (item: IActiveItem) => {

    setActiveItem( item )
    setFullPreviewIsOpen(true)

  }

  const galleryItems: IActiveItem[] = [
    {
      id: 1,
      src: '/images/aboutUs/gallery1.jpg',
      type: 'image'
    },
    {
      id: 2,
      src: '/images/aboutUs/gallery2.jpg',
      type: 'image'
    },
    {
      id: 3,
      src: '/images/aboutUs/gallery3.jpg',
      type: 'image'
    },
  ]

  return (

    <section className="carcass with_bread_crumbs" >


      <Header breadCrumpsList={ breadCrumbsList } />

      <main className={ `${ s.content } container` }>

        <H2 className={ s.title } >О НАС</H2>

        <div className={ s.banner }>

          <picture>

            <source media="(min-width: 768px)" srcSet="/images/aboutUs/desk_banner.jpg" />
            <source media="(min-width: 520px)" srcSet="/images/aboutUs/laptop_banner.jpg" />
            <source media="(max-width: 520px)" srcSet="/images/aboutUs/mobile_banner.jpg" />
            <Image alt="banner" fill src={ '/images/aboutUs/desk_banner.jpg' } quality={ 100 } />

          </picture>


        </div>

        <P className={ s.text }>

          Наверное, нет никого, кто с теплом и любовью не вспоминал бы времена,
          когда по дому разлетался манящий аромат маминых орешков со сгущенкой.
          Алюминиевая орешница, кастрюлька, в которой часами варилась сгущенка,
          торт “наполеон” и хрустящие вафельные трубочки, без которых не обходилось
          ни одно семейное чаепитие - все это часть нашей с вами истории и советской культуры.
          Наверное, нет никого, кто с теплом и любовью не вспоминал бы времена, когда по дому разлетался
          манящий аромат маминых орешков со сгущенкой.

        </P>


        <ul className={ s.advantages }>

          <li className={ s.advantages__item }>
            <span className={ s.number }>01</span>
            <H2 className={ s.advantages__title }>Качество и безопасность продуктов</H2>
            <P className={ s.advantages_text }>
              Десерты HONEYMOM предназначены для всей семьи.
              В нашем медовике вы не найдете растительных сливок,
              а в креме для трубочек заменителей молочного жира
            </P>
          </li>

          <li className={ s.advantages__item }>
            <span className={ s.number }>02</span>
            <H2 className={ s.advantages__title }>любовь и забота</H2>
            <P className={ s.advantages_text }>
              Все десерты изготавливаются вручную с любовью и заботой, а полтому каждая крошка пропитана искреенним желанием порадовать клиентов.
            </P>
          </li>

          <li className={ s.advantages__item }>
            <span className={ s.number }>03</span>
            <H2 className={ s.advantages__title }>Верность традициям</H2>
            <P className={ s.advantages_text }>
              Мы собрали лучшие традиционные рецепты и добавили в них свои собственные секретики, чтобы подарить вам незабываемый сбалансированный вкус и теплые воспоминания.
            </P>
          </li>

        </ul>


        <P className={ s.text }>

          Наверное, нет никого, кто с теплом и любовью не вспоминал бы времена,
          когда по дому разлетался манящий аромат маминых орешков со сгущенкой.
          Алюминиевая орешница, кастрюлька, в которой часами варилась сгущенка,
          торт “наполеон” и хрустящие вафельные трубочки, без которых не обходилось
          ни одно семейное чаепитие - все это часть нашей с вами истории и советской культуры.
          Наверное, нет никого, кто с теплом и любовью не вспоминал бы времена, когда по дому
          разлетался манящий аромат маминых орешков со сгущенкой. Наверное, нет никого, кто с теплом и
          любовью не вспоминал бы времена, когда по дому разлетался манящий аромат маминых орешков со сгущенкой.
          Алюминиевая орешница, кастрюлька, в которой часами варилась сгущенка, торт “наполеон” и хрустящие вафельные
          трубочки, без которых не обходилось ни одно семейное чаепитие - все это часть нашей с вами истории и советской культуры.
          Наверное, нет никого, кто с теплом и любовью не вспоминал бы времена, когда по дому разлетался манящий аромат маминых орешков со сгущенкой.

        </P>

        <FullImagePreview  

          activeItem={ activeItem }
          commonPreviews={galleryItems}
          fullPreviewOpen = { fullPreviewIsOpen }
          setActiveItem={ setActiveItem }
          setFullPreviewOpen={ setFullPreviewIsOpen }
          showControls = { false }
          type="none"

        />

        <div className={ s.gallery }>

          { galleryItems.map(item => (

            <button onClick = {() => openFullPreview( item )} key={ item.id } className={ s.image_wrapper }>
              <Image alt="gallery_item" fill src={ item.src } quality={ 100 } />
            </button>

          ))}

        </div>

      </main>



      <Footer />


    </section>


  )

}

export default ContactsPage
