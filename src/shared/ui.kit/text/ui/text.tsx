import { cssIf } from "@/shared/scripts"
import { FC, PropsWithChildren } from "react"

interface ITitleProps extends PropsWithChildren {

  className?: string

}

export const H1: FC<ITitleProps> = ( { children, className } ) => ( <h1 className={ `h1 ${ className }` }>{ children }</h1> )
export const H2: FC<ITitleProps> = ( { children, className } ) => ( <h2 className={ `h2 ${ className }` }>{ children }</h2> )
// const H3: FC< ITitleProps > = ({ children, className }) => ( <h3 className = {`h3 ${ className }`}>{ children }</h3> )


interface IPProps extends PropsWithChildren {

  className?: string
  bold?: boolean

}

export const P: FC<IPProps> = ( { children, className, bold } ) => (

  <p className={ `p ${ className } ${ cssIf( bold, 'bold' ) }` }>{ children }</p>

)

