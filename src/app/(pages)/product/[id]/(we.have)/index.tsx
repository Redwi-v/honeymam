'use client'
import { IProduct } from "@/shared/api"
import { FC } from "react"
import { Controls } from "../(info)"
import { H2 } from "@/shared/ui.kit"
import s from './we.have.module.scss'
import { useKeenSlider } from "keen-slider/react"
import 'keen-slider/keen-slider.min.css'
import { CatalogItem } from "@/widgets/catalog/ui/catalog.item/catalog.item"

const WeHaveSlider: FC<{ list: IProduct[] }> = ( { list } ) => {

  const [ sliderRef, slider ] = useKeenSlider( {
    loop: true,
    slides: {
      perView: 3,
      origin: 'center',
      spacing: 10,
    },

    breakpoints: {

      '(max-width: 520px)': {
        
        slides: {

          perView: 2

        }
      },

    },

  } )

  return (

    <div className={ s.we_have_content }>

      <div className={ s.we_have_header }>

        <H2 className = { s.title } >А еще у нас есть</H2>
        <Controls next={ () => slider.current?.next() } prev={ () => slider.current?.prev() } />

      </div>

      <div ref={ sliderRef } className={ `${ s.slider } keen-slider` }>

        { list.map( ( item, index ) => (

          <div key={ index } className={`${ s.slide } keen-slider__slide`}>
            <CatalogItem {...item}/>
          </div>

        ) )

        }

      </div>


    </div>

  )

}

export default WeHaveSlider

