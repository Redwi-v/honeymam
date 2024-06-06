'use client'
import { FC, JSXElementConstructor, PropsWithChildren, ReactElement, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import s from './animate.module.scss'
import { cssIf } from '@/shared/scripts';
import { useInterval } from 'react-use';
import Link from 'next/link';


interface IAnimateProps {

  className?: string
  wrapperClass?: string,
  frames: ReactElement[]
  isActive?: boolean
  containerClassName?: string
  onClick?: () => void

}

export const Animate: FC<IAnimateProps & PropsWithChildren> = ( props ) => {

  const { frames, className, children, wrapperClass, isActive, containerClassName, onClick } = props

  const [ index, setIndex ] = useState( 0 );
  const [ delay, setDelay ] = useState( 500 );
  const [ isRunning, toggleIsRunning ] = useState( false );


  useEffect(() => {

    if (isActive !== undefined )

    toggleIsRunning(isActive)

  }, [isActive])

  useInterval(
    () => {

      if ( index >= frames.length - 1 ) return setIndex( 0 )
      setIndex( prev => prev + 1 );

    },
    isRunning ? delay : null
  );




  return (

    <div onClick={onClick} onMouseLeave={ () => toggleIsRunning( false ) } onMouseEnter={ () => toggleIsRunning( true ) } className={`${ wrapperClass } ${ containerClassName }`}>
      <div className={ `${ s.animate } ${ cssIf( className, className! ) }` }>

        { frames.map( ( frame, frameIndex ) => (

          <div className={ `${ s.frame } ${ cssIf( index == frameIndex, s.active ) }` } key={ frameIndex }>{ frame }</div>

        ) ) }


      </div>
      { children }
    </div>

  )

}

interface IHoverAnimatedLinkProps {

  frames: JSX.Element[]
  href: string,
  className?: string,
  animateClassName?: string,
  wrapperClassName?: string

}

export const HoverAnimatedLink: FC<IHoverAnimatedLinkProps & PropsWithChildren> = ( { animateClassName, wrapperClassName, frames, href, children, className } ) => {

  const [ isActive, setIsActive ] = useState( false )

  return (

    <Link onMouseLeave={ () => setIsActive( false ) } onMouseEnter={ () => setIsActive( true ) } className={ className } href={ href }>
      <span className="h2">{ children }</span>

      <Animate

        className={ animateClassName }
        wrapperClass={ wrapperClassName }
        isActive={ isActive }
        frames={ frames }

      />

    </Link>

  )

}
