'use client'
import Image from "next/image";
import { FC, ReactElement, useEffect } from "react";

import s from './header.module.scss'
import Link from "next/link";
import { BreadCrumbs, ICrumbItem, P } from "@/shared/ui.kit";
import { cssIf } from "@/shared/scripts";

import { FooterHandsImage } from "@/app/_images/footer.hands";
import { LogoImage } from "@/app/_images/logo";
import { CartImage } from "@/app/_images/cart";
import { HeartImage } from "@/app/_images/heart";
import { LoginImage } from "@/app/_images/login";
import { MenuImage } from "@/app/_images/menu";

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

      <div className={ `${ s.main } container flex items-center` }>

        <button className={ s.mobile_menu }>
          <MenuImage />
        </button>

        <LogoImage className={ s.logo } />

        <ul className={ s.navigation }>{ navigationList }</ul>

        <ul className={ `${ s.controls } flex gap-24 gap-l-16` }>

          <ControlWithIcon adaptiveText href="/" Icon={ CartImage } text="Корзина" />
          <ControlWithIcon className={ s.mobile_hide } adaptiveText href="/" Icon={ HeartImage } text="Избранное" />
          <ControlWithIcon adaptiveTextMobile href="/" Icon={ LoginImage } text="Войти" />

        </ul>

      </div>

      { breadCrumpsList && <BreadCrumbs list={ breadCrumpsList } /> }

    </header>

  );

}

interface IControlsWithIcon {

  Icon: FC<{ className: string }>,
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

      <Icon className={ s.icon } />

      <P className={ `${ s.control_text } ${ cssIf( adaptiveTextMobile, s.mobile_hide ) }` } >{ text }</P>

    </Link>

  )

}



