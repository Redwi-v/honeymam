'use client'

import { useState } from "react";
import { MinusImage } from "@/app/_images/minus";
import { PlusImage } from "@/app/_images/plus";
import { cssIf } from "@/shared/scripts";

import s from './counter.module.scss'
import { BinImage } from "@/app/_images/bin";


export const Counter = () => {

  const [ count, setCount ] = useState( 0 )

  return (

    <div className={ `${ s.counter } ${ cssIf( count !== 0, s.active ) }` }>

      <button onClick={ () => setCount( prev => prev - 1 <= 0 ? 0 : prev - 1 ) } className={ s.button }>

        { count === 1 ? <BinImage className={ s.bin } /> : <MinusImage /> }


      </button>

      <span className={ s.count }>{ count }</span>

      <button onClick={ () => setCount( prev => prev + 1 ) } className={ s.button }>

        <PlusImage />

      </button>

    </div>

  )

}