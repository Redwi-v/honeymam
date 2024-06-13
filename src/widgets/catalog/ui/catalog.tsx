'use client'
import s from './catalog.module.scss'
import { TextCategories } from "@/entities/text.categories";

import { FC } from 'react';
import { H1 } from '@/shared/ui.kit';
import type { IProduct } from '@/shared/api';
import { CatalogItem } from './catalog.item/catalog.item';
import { cssIf } from '@/shared/scripts';

interface ICatalogProps {

  list: IProduct[],
  title?: string
  header?: boolean
  tab?: string
  listClassName?: string

}

export const Catalog: FC<ICatalogProps> = ( props ) => {

  const { list, title, header, tab, listClassName } = props

  console.log(list);
  
  return (

    <div className={ s.catalog }>

      { header !== false &&

        <>

          <H1 className={ s.title }>{ title || 'Каталог вкусных десертов' }</H1>

          <TextCategories tab = { tab }/>

        </>

      }

      <ul className={`${ s.list } ${ cssIf( listClassName, listClassName! ) }`}>

        { list?.length > 0 &&

          list.map( item => <CatalogItem key={ item.id } { ...item } /> )

        }

      </ul>

    </div>

  )

}



