'use client'
import { FC, JSXElementConstructor, PropsWithChildren, ReactElement, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import s from './animate.module.scss'
import { cssIf } from '@/shared/scripts';
import { useInterval } from 'react-use';


interface IAnimateProps {

  className?: string
  wrapperClass?: string,
  frames: ReactElement[]
  isActive?: boolean

}

export const Animate: FC<IAnimateProps & PropsWithChildren> = ( props ) => {

  const { frames, className, children, wrapperClass, isActive } = props

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

    <div onMouseLeave={ () => toggleIsRunning( false ) } onMouseEnter={ () => toggleIsRunning( true ) } className={`${ wrapperClass }`}>
      <div className={ `${ s.animate } ${ cssIf( className, className! ) }` }>

        { frames.map( ( frame, frameIndex ) => (

          <div className={ `${ s.frame } ${ cssIf( index == frameIndex, s.active ) }` } key={ frameIndex }>{ frame }</div>

        ) ) }


      </div>
      { children }
    </div>

  )

}

