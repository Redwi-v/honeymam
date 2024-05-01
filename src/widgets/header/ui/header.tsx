'use client'
import { FC, ReactElement, useState } from "react";

import s from './header.module.scss';
import Link from "next/link";
import { BreadCrumbs, ICrumbItem, P } from "@/shared/ui.kit";
import { cssIf } from "@/shared/scripts";

import { LogoImage } from "@/app/_images/logo";
import { CartImage } from "@/app/_images/cart";
import { HeartImage } from "@/app/_images/heart";
import { LoginImage } from "@/app/_images/login";
import { MenuImage } from "@/app/_images/menu";
import { TextCategories } from "@/entities/text.categories";
import { MenuClosedImage } from "@/app/_images/menu.closed";
import { Animate } from "@/shared/ui.kit/animate";
import { HeartImageFrame2 } from "@/app/_images/heart.frame2";
import { LoginImageFrame2 } from "@/app/_images/login.frame2";

interface HeaderProps {

  breadCrumpsList?: ICrumbItem[]

}

const navigationParams = {

  catalog: {

    title: 'Каталог',
    href: '/catalog',

  },

  deliveryAndPlay: {

    title: 'Доставка и оплата',
    href: '/delivery.and.pay',

  },

  aboutUs: {

    title: 'О нас',
    href: '/aboutUs',

  },

  contacts: {

    title: 'Контакты',
    href: '/contacts',

  },

}

export const Header: FC<HeaderProps> = ( { breadCrumpsList } ) => {


  // render navigation list
  const navigationList: ReactElement[] = []
  const [ menuIsOpen, setMenuIsOpen ] = useState( false )

  for ( const [ key, value ] of Object.entries( navigationParams ) )
  {

    navigationList.push(

      <li className={ s.navigation_item } >

        <Link key={ key } className="p" href={ value.href }>{ value.title }</Link>

      </li>

    )

  }

  return (

    <header className={ `${ s.header } ${ cssIf( !breadCrumpsList, s.header_small ) } ` }>

      { menuIsOpen && <MobileMenu /> }

      <div className={ `${ s.main } container flex items-center` }>

        <button className={ s.mobile_menu_button } onClick={ () => setMenuIsOpen( prev => !prev ) }>
          { menuIsOpen ? <MenuClosedImage /> : <MenuImage /> }
        </button>

        <Link href={'/'}>
          <LogoImage className={ s.logo } />
        </Link>

        <ul className={ s.navigation }>{ navigationList }</ul>

        <ul className={ `${ s.controls } flex gap-24 gap-l-16` }>

          <ControlWithIcon

            adaptiveText href="/"
            Icon={ <CartImage className={ s.icon } /> }
            text="Корзина"

          />


          <Animate

            className={ ` ${ s.icon }` }
            wrapperClass={ `${ s.control_with_icon } flex items-center` }
            frames={ [

              <HeartImage key={ 1 } />,
              <HeartImageFrame2 key={ 2 } />,

            ] }

          >

            <ControlWithIcon

              className={ `${ s.mobile_hide }` }
              adaptiveText
              href="/"
              text="Избранное"

            />

          </Animate>



          <Animate

            className={s.icon }
            wrapperClass={ `${ s.control_with_icon } flex items-center` }
            frames={ [

              <LoginImage key={ 1 } />,
              <LoginImageFrame2 key={ 2 } />,

            ] }

          >

            <ControlWithIcon adaptiveTextMobile href="/"  text="Войти" />

          </Animate>

        </ul>

      </div>

      { breadCrumpsList && <BreadCrumbs list={ breadCrumpsList } /> }

    </header>

  );

}

interface IControlsWithIcon {

  Icon?: ReactElement,
  text: string,
  count?: string | number,
  href: string
  adaptiveText?: boolean
  adaptiveTextMobile?: boolean
  className?: string

}


const ControlWithIcon: FC<IControlsWithIcon> = ( props ) => {

  const { count, Icon, text, href, adaptiveText, adaptiveTextMobile, className } = props

  return (

    <Link

      href={ href }
      className={ `${ s.control_with_icon } ${ cssIf( className, className! ) } ${ cssIf( adaptiveText, s.adaptive_text ) } flex items-center` }

    >

      { Icon }

      <P className={ `${ s.control_text } ${ cssIf( adaptiveTextMobile, s.mobile_hide ) }` } >{ text }</P>

    </Link>

  )

}

const MobileMenu = () => {

  return (
    <div className={ s.mobile_menu }>

      <div className={ `${ s.mobile_menu_content } container` }>

        <a href="/catalog" className="h2">Каталог</a>
        <TextCategories listType className={ s.categories } />

        <a href="/catalog" className="h2">Доставка и оплата</a>
        <a href="/catalog" className="h2">О нас</a>
        <a href="/catalog" className="h2">Контакты</a>

        <div className={ s.controls }>

          <a className={ `h2` } href='/'>
            <CartImage />
            Корзина
          </a>
          <a className={ `h2` } href='/'>
            <HeartImage />
            Избранное
          </a>
          <a className={ `h2` } href='/'>
            <LoginImage />
            Войти
          </a>

        </div>

        <div className={ s.contacts }>

          <a href="tel:+79189999999">+7 (918) 999-99-99</a>
          <a className="pt-m-8" href="mailto:honeymom@gmail.com">honeymom@gmail.com</a>
          <P className="pt-m-8">с 10:00 до 21:00</P>

        </div>

      </div>

    </div>
  )

}



