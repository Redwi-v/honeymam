import Image from 'next/image';
import s from './catalog.module.scss'
import { TextCategories } from "@/entities/text.categories";


import { FC } from 'react';
import { Counter, H1, H2, P } from '@/shared/ui.kit';
import { StickImage } from "@/app/_images/stick";
import type { IProduct } from '@/shared/api';
import { LikeButton } from '@/shared/ui.kit/like.button/ui/like.button';



interface ICatalogProps {

  list: IProduct[],
  title?: string
  header?: boolean

}

export const Catalog: FC<ICatalogProps> = ( props ) => {

  const { list, title, header } = props

  return (

    <div className={ s.catalog }>

      { header !== false &&

        <>

          <H1 className={ s.title }>{ title || 'Каталог вкусных десертов' }</H1>

          <TextCategories />

        </>

      }

      <ul className={ s.list }>

        { list?.length > 0 &&

          list.map( item => <CatalogItem key={ item.id } { ...item } /> )

        }

      </ul>

    </div>

  )

}



const CatalogItem: FC<IProduct> = ( { image, title, description, price, discount, badge } ) => (

  <li className={ s.item }>

    <div className={ s.preview }>

      {/* <Image fill src={ '/images/product_bg.png' } alt="product preview" /> */ }
      <Image fill src={ image } alt="product preview" />

      <LikeButton />

      { badge === 'PROMOTION' &&

        <div className={ s.type }>
          <Image src={ '/images/testData/action.svg' } alt="action" fill />
        </div>

      }

      { badge === 'HIT' &&

        <div className={ s.type }>
          <Image src={ '/images/testData/hit.svg' } alt="action" fill />
        </div>

      }

    </div>

    <div className={ s.main_info }>

      <H2 className={ s.item_title }>{ title }</H2>

      <P className={ s.item_description }>
        { description }
      </P>

      <div className={ s.bottom }>

        <div className={ s.price }>

          <P className={ s.price_value }>{ price }  ₽</P>
          { discount && <P className={ s.old_price }>
            <StickImage />
            { Math.ceil( price + ( price / 100 * discount ) ) } ₽
          </P> }

        </div>

        <Counter />

      </div>

    </div>

  </li>
)
