import { ChangeEvent, FC } from "react";
import s from './radio.button.module.scss'
import { cssIf } from "@/shared/scripts";

interface RadioButtonProps {
  
  isChecked: boolean
  onChange?: ( e: ChangeEvent<HTMLInputElement> ) => void
  className?: string
  label?: string
  onClick?: () => void

}

export const RadioButton: FC<RadioButtonProps> = ({ isChecked, onChange, className, label, onClick }) => {

  return (

    <label className = {`${ s.label } ${ cssIf( className, className! ) }`}>

      <input onClick = { onClick } type = 'radio' checked = { isChecked } onChange = { onChange } />

      <div className = {`${ s.styled_button } ${ cssIf( isChecked, s.active ) }`}>
        <span />
      </div>

      {  label && <span className = { s.label_text }>{ label }</span>  }

    </label>

  );

}
 