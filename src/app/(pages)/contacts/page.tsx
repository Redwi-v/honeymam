'use client'
import { H1, H2, P } from "@/shared/ui.kit"
import { NextPage } from "next"
import s from './contacts.module.scss'
import { Map, YMaps } from '@pbe/react-yandex-maps';

interface ContactsPageProps {

}

const ContactsPage: NextPage<ContactsPageProps> = props => {

  return (

    <section className={ `${ s.contacts_page } container` }>

      <H1 className={ s.title }>Контакты</H1>

      <div className={ s.main }>

        <YMaps>

          <div className={ s.map }>
            <Map width="100%" height="100%" defaultState={ { center: [ 55.75, 37.57 ], zoom: 9 } } />
          </div>

        </YMaps>

        <div className={ s.info }>

          <div className={ s.block }>
            <H2>адрес</H2>
            <P>г. Санкт-Петербург, 3-я улица Строителей, 25</P>
          </div>

          <div className={ s.block }>
            <H2>e-mail</H2>
            <a href="mailto:honeymom@gmail.com" className="p">honeymom@gmail.com</a>
          </div>

          <div className={ s.block }>
            <H2>режим работы</H2>
            <P>с 10:00 до 21:00</P>
          </div>


          <div className={ s.block }>
            <H2>соц. сети:</H2>
            <a className="p">VK, telegram, instagram</a>
          </div>

          <div className={ s.block }>
            <H2>Телефон</H2>
            <P>+7 (918) 999-99-99</P>
          </div>



        </div>

      </div>



    </section>

  )
}

export default ContactsPage
