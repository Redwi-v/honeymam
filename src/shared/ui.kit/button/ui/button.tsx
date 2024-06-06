'use client'
import { FC, MouseEvent, PropsWithChildren } from 'react'
import s from './button.module.scss'
import { cssIf } from '@/shared/scripts'
import { useRouter } from 'next/navigation';

export enum ButtonStylesEnum {

  white = 'WHITE',
  red = 'RED',


}

const ButtonStyles = {

  [ ButtonStylesEnum.white ]: s.white,
  [ ButtonStylesEnum.red ]: s.red,

}

interface IButtonProps {

  className?: string
  href?: string
  onClick?: ( e: MouseEvent<HTMLButtonElement> ) => void
  style?: ButtonStylesEnum

}

export const Button: FC<PropsWithChildren & IButtonProps> = ( props ) => {

  const { children, className, href, onClick, style } = props

  const { push } = useRouter()

  const action = ( e: MouseEvent<HTMLButtonElement> ) => {

    if ( href ) return push( href )
    onClick && onClick( e )

  }

  return (

    <button  onClick={ action } className={ `${ s.button } ${ cssIf( className, className! ) } ${ cssIf( style, ButtonStyles[style!] ) }` }>
      { children }
    </button>

  )

}