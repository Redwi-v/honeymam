import { FC, PropsWithChildren } from "react";
import s from './popup.module.scss'
import Image from "next/image";

interface PopupProps {
 
  title?: string,
  isActive: boolean,
  setIsActive: ( value: boolean ) => void
  className?: string

}
 
export const Popup: FC<PopupProps & PropsWithChildren> =
  ({ title, isActive, setIsActive, children, className }) => {

  return (

    <div className = {`${ s.wrapper } ${ isActive && s.active }`}>

      <div  className = { s.overlay } />

      <div className={ s.window_wrapper }>

        <div className = {`${ s.window } ${ className }`} >
          
          <div className = { s.header }>
            
            { title && <h3 className = {`${ s.title } h3`}>{ title }</h3> }

            <button onClick = { () => setIsActive( false ) } className = { s.close }>

              <Image fill alt = 'close' src = '/ui/cross.svg' />

            </button>
            
          </div>

          { children }

        </div>
        
      </div>

    </div>

  );

}
 