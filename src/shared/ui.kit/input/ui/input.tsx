'use client'
import { ChangeEvent, DetailedHTMLProps, Dispatch, FC, InputHTMLAttributes, SetStateAction, useState } from 'react';
import s from './input.module.scss'
import { P } from '../../text/ui/text';
import { AddressSuggestions } from 'react-dadata';
import { CrossImage } from '@/app/_images/cross';
import { cssIf } from '@/shared/scripts';
import InputMask from 'react-input-mask';

interface InputProps {

  label?: string
  inputParams: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  className?: string
  error?: string
  errorStyle?: boolean
  clearAction?: () => void
  mask?: RegExp

}

export const Input: FC<InputProps> = ( props ) => {

  const { label, className, error, errorStyle, clearAction, mask } = props
  const { className: inputClassName, onChange, max, min, ...inputParams } = props.inputParams

  const changeAction = ( e: ChangeEvent<HTMLInputElement> ) => {

    if ( !e.target.value || !max || !min ) return onChange && onChange( e )

    e.target.value = String( +e.target.value > +max ? +max : e.target.value )
    e.target.value = String( +e.target.value < +min ? +min : e.target.value )



    onChange && onChange( e )

  }

  return (

    <div className={ `${ s.wrapper } ${ className }` }>

      { label && <span className={ s.label }>{ label }</span> }
      <div className={ s.main }>

        { mask 

          //@ts-ignore
          ? <InputMask

            className={ `${ s.input } ${ inputClassName } ${ error || errorStyle && s.error } ${ cssIf( clearAction, s.input_reset ) } ` }
            type="text"
            placeholder="Placeholder"
            onChange={ changeAction }
            { ...inputParams }
            mask="+7 (999) 999 99 99"
            maskChar={''}
          /> 

          : <input

          className={ `${ s.input } ${ inputClassName } ${ error || errorStyle && s.error } ${ cssIf( clearAction, s.input_reset ) } ` }
          type="text"
          placeholder="Placeholder"
          onChange={ changeAction }

          { ...inputParams }

        /> }

        { error && <P className={ s.err_label }>{ error }</P> }
        { clearAction && <button className={ s.reset } onClick={ () => clearAction && clearAction() }>
          <CrossImage />
        </button> }
      </div>

    </div>

  );

}

interface IDaDataProps extends InputProps {

  state: [ any, Dispatch<any> ]

}

export const DaDataField: FC<IDaDataProps> = ( { state, ...props } ) => {

  return (

    <AddressSuggestions

      token="19ac4f54e23b03dca32f3686f90a4f22ae7acb53"
      value={ state[ 0 ] }
      onChange={ state[ 1 ] }
      suggestionsClassName={ s.list }
      containerClassName={ s.container }
      currentSuggestionClassName={ s.active }
      customInput={ ( daDataProps ) => <Input { ...props } inputParams={ { ...props.inputParams, ...daDataProps, placeholder: '' } } /> }

    />

  )

}