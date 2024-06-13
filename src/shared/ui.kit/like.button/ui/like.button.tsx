'use client'
import { Dispatch, FC, MouseEvent, SetStateAction, useState } from 'react'
import s from './like.button.module.scss'
import { HeartImage } from "@/app/_images/heart";


interface ILikeButtonProps {

  isActive?: boolean
  state: [boolean, Dispatch<SetStateAction<boolean>>]
  onClick?: () => void,

}

export const LikeButton: FC<ILikeButtonProps> = ({ onClick, state }) => {

  const [ active, setIsActive ] = state 
  const action = ( e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> ) => {
    if ( onClick ) {
      onClick()
    }else {

      setIsActive( prev => { e.stopPropagation();
        e.preventDefault(); 
        return !prev 
      } )

    }
  }

  return (

    <button

      className={ `${ s.like } ${ active && s.active }` }
      onClick={ (e) => action( e ) }>

      <HeartImage />

    </button>
  )

} 