'use client'
import { FC, useState } from 'react'
import s from './like.button.module.scss'
import { HeartImage } from "@/app/_images/heart";


interface ILikeButtonProps {

}

export const LikeButton: FC<ILikeButtonProps> = ( props ) => {

  const [ isActive, setIsActive ] = useState( false )

  return (

    <button

      className={ `${ s.like } ${ isActive && s.active }` }
      onClick={ ( e ) => setIsActive( prev => { e.stopPropagation() ; e.preventDefault(); return !prev }  ) }>

      <HeartImage />

    </button>
  )

} 