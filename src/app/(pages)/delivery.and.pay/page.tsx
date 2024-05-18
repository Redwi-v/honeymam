'use client'
import { H1, H2, P } from "@/shared/ui.kit"
import { NextPage } from "next"
import s from './delivery.and.pay.module.scss'
import { Map, YMaps } from '@pbe/react-yandex-maps';
import { useState } from "react";
import { cssIf } from "@/shared/scripts";
import { MapPointImage } from "@/app/_images/map.point";
import { ClockImage } from "@/app/_images/clock";

interface ContactsPageProps {

}

const ContactsPage: NextPage<ContactsPageProps> = props => {

  const [ pointsActive, setPointsActive ] = useState( false )

  return (

    <section className={ `${ s.delivery_and_pay } container` }>

      <H1 className={ `${ s.title } text-left` }>Доставка и оплата</H1>

      <div className={ `${ s.zone } mt-24 flex items-center` }>

        <H2 className="">Зоны покрытия и кофейни</H2>

        <div onClick={ () => setPointsActive( prev => !prev ) } className={ s.toggle }>

          <span className={ `${ cssIf( !pointsActive, s.active ) }` } >Зона доставки</span>
          <span className={ `${ cssIf( pointsActive, s.active ) }` } >Точки самовывоза</span>

        </div>

      </div>

      <P className={ `${ s.address } flex gap-8 mt-16 mt-l-16 mt-m-16 items-center` }>
        <MapPointImage />
        Москва, 3-я улица Строителей, 25
      </P>

      <P className={ `${ s.time } flex gap-8 mt-16 mt-l-16 mt-m-16 items-center` }>
        <ClockImage />
        Время работы заведения: с 10:00 до 21:00
      </P>


      <YMaps >
        <div className={ `${ s.map } mt-24` }>
          <Map width="100%" height="100%" defaultState={ { center: [ 55.685031, 37.537362 ], zoom: 15 } } >
          </Map>
        </div>
      </YMaps>

      <H2 className="mt-60 mt-l-40 mt-m-40">Доставка</H2>

      <P className={ `${ s.text } mt-24 mt-l-24 mt-m-16` }>

        Доставка заказов производится с 9:00 до 22:00 по Санкт-Петербургу в рамках «серой зоны». Способ получения заказа и временной интервал вы выбираете при оформлении заказа.
        
      </P>

      <P className={ s.text }>

        Сумма заказа до 499 руб. – доставка 299 рублей;<br />
        Сумма заказа 500-999 руб. – доставка 229 рублей;<br />
        Сумма заказа 1.000-1.999 руб. – доставка 149 рублей;<br />
        Сумма заказа от 2.000 руб. – бесплатная доставка.

      </P>

      <P className={ s.text }>
        Курьерская доставка в близлежащие районы города за пределами «серой зоны»
        по согласованию с оператором и оплачивается дополнительно.
        Заказы, оформленные после 17:00, доставляются на следующий день.
        В день доставки просим вас оставаться на связи по указанному в заказе номеру телефона, чтоб оператор интернет-магазина мог связаться с вами. В комментариях
        к заказу можно указать удобное время для звонка.
        Оформленный заказ также можно забрать в наших кафе. Самовывоз - бесплатно.
      </P>

      <H2 className={ `mt-60 mt-l-40 mt-m-40` }>оплата</H2>

      <P className={ `${ s.text } mt-24 mt-l-24 mt-m-16` }>
        Возможные способы оплаты меняются в зависимости от вашего адреса, а также способа и  времени доставки. Увидеть все доступные способы оплаты и выбрать самый удобный вы можете в  корзине.
      </P>


      <ul className={ s.pay_methods }>

        <li className={ s.pay_method }>
          <H2>Картой на сайте</H2>

          <P className={ `${ s.text }` }>
            Привяжите банковскую карту, чтобы оплачивать покупки онлайн.
          </P>
        </li>

        <li className={ s.pay_method }>
          <H2>Картой курьеру</H2>

          <P className={ `${ s.text }` }>
            Выберите эту опцию, если хотите оплатить покупку картой при  получении. Курьер возьмеёт терминал.
          </P>
        </li>


        <li className={ s.pay_method }>
          <H2>Наличными</H2>

          <P className={ `${ s.text }` }>
            Вы можете оплатить заказ наличными при получении, если такой способ оплаты доступен по вашему адресу.
          </P>
        </li>

      </ul>

    </section>

  )
}

export default ContactsPage
