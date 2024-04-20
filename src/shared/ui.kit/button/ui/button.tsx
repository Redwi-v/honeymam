'use client'
import { FC, MouseEvent, PropsWithChildren } from 'react'
import s from './button.module.scss'
import { cssIf } from '@/shared/scripts'
import { useRouter } from 'next/navigation';

interface IButtonProps {

  className?: string
  href?: string
  onClick?: ( e: MouseEvent<HTMLButtonElement> ) => void

}

export const Button: FC<PropsWithChildren & IButtonProps> = ( props ) => {

  const { children, className, href, onClick } = props

  const { push } = useRouter()

  const action = ( e: MouseEvent<HTMLButtonElement> ) => {

    if ( href ) return push( href )
    onClick && onClick( e )

  }

  return (

    <button onClick={ action } className={ `${ s.button } ${ cssIf( className, className! ) }` }>
      { children }
    </button>

  )

}