import Link from "next/link"
import { FC } from "react"

import s from './bread.crumbs.module.scss'
import { ICrumbItem } from "../types/bread.crumbs.types"
import { ArrowImage } from "@/app/_images/arrow"

interface IBreadCrumbsProps {

  list: ICrumbItem[]

}

export const BreadCrumbs: FC<IBreadCrumbsProps> = ( { list } ) => {

  return (

    <section className={ `${ s.bread_crumbs } flex container` }>

      { list.map( ( params, index ) => (

        <div className='flex items-center' key={ index }>

          <Link className={ `${ s.link } p` } href={ params.href }>{ params.title }</Link>
          { index !== list.length - 1 && <ArrowImage className={ s.arrow } /> }

        </div>

      ) )
      }

    </section >

  )

}