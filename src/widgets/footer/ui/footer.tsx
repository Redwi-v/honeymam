import { FC } from "react";
import s from './footer.module.scss'
import Image from "next/image";
import { FooterHandsImage } from "@/app/_images/footer.hands";
import { LogoImage } from "@/app/_images/logo";
import { P } from "@/shared/ui.kit";

interface FooterProps {

}

export const Footer: FC<FooterProps> = () => {

  return (

    <footer className={ s.footer } >

      <div className={ s.hands }>

        <FooterHandsImage className={ s.hands } />

      </div>

      <div className={ `${ s.content } container` }>

        <div className={ `${ s.top } flex` } >


          <LogoImage className={ s.logo } />


          <div className={ `${ s.info } flex` }>

            <div className={ `${ s.info_left } flex flex-col gap-16 gap-l-12 gap-m-8 ` }>

              <a className="p" href="/">Каталог</a>
              <a className="p" href="/">Доставка и оплата</a>
              <a className="p" href="/">О нас</a>
              <a className="p" href="/">Контакты</a>

            </div>

            <div className={ `${ s.info_right } flex flex-col gap-24 gap-l-20 gap-m-12` }>

              <P className={ s.transparent }>Г. Санкт-Петербург, <br /> ул.Мебельная д.19.кв 2</P>
              <P className={ s.transparent }>с 10:00 до 21:00</P>
              <div className="flex gap-3">

                <a className={ `p` } href="/">VK,</a>
                <a className={ `p` } href="/">telegram,</a>
                <a className={ `p` } href="/">instagram</a>

              </div>

            </div>

          </div>


        </div>


        <div className={ `${ s.bottom } flex` } >

          <P className={ s.transparent }>© 2024 HoneyMam</P>
          <a className={ `${ s.transparent } p` }>Политика обработки персональных данных</a>

        </div>

      </div>

    </footer>

  );

}
