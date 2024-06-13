'use client'
import { BaseSyntheticEvent, FC, LegacyRef, ReactElement, RefAttributes, useEffect, useRef, useState } from "react";

import s from './header.module.scss';
import Link from "next/link";
import { Button, ICrumbItem, Input, P } from "@/shared/ui.kit";
import { cssIf } from "@/shared/scripts";

import { LogoImage } from "@/app/_images/logo";
import { CartImage } from "@/app/_images/cart";
import { HeartImage } from "@/app/_images/heart";
import { LoginImage } from "@/app/_images/login";
import { MenuImage } from "@/app/_images/menu";
import { TextCategories } from "@/entities/text.categories";
import { MenuClosedImage } from "@/app/_images/menu.closed";
import { Animate } from "@/shared/ui.kit/animate";
import { HeartImageFrame2 } from "@/app/_images/heart.frame2";
import { LoginImageFrame2 } from "@/app/_images/login.frame2";
import { Popup } from "@/shared/ui.kit";
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { UserApi } from "@/shared/api/user/user.api";
import { AxiosError } from "axios";
import { AvatarImage } from "@/app/_images/avatar";
import { useRouter } from "next/navigation";

interface HeaderProps {

  breadCrumpsList?: ICrumbItem[]

}

const navigationParams = {

  catalog: {

    title: 'Каталог',
    href: '/catalog',

  },

  deliveryAndPlay: {

    title: 'Доставка и оплата',
    href: '/delivery.and.pay',

  },

  aboutUs: {

    title: 'О нас',
    href: '/about.us',

  },

  contacts: {

    title: 'Контакты',
    href: '/contacts',

  },

}

export const Header: FC<HeaderProps> = ( { breadCrumpsList } ) => {

  // render navigation list
  const navigationList: ReactElement[] = []
  const [ menuIsOpen, setMenuIsOpen ] = useState( false )
  const [ signInPopupIsActive, setSignInPopupIsActive ] = useState( false )
  const router = useRouter()

  const { data, refetch: refetchUser } = useQuery( {

    queryKey: [ 'activeUser' ],
    initialData: null,
    queryFn: UserApi.getActiveUser,
    retry: 0,

  } )


  for ( const [ key, value ] of Object.entries( navigationParams ) ) {

    navigationList.push(

      <li key={ key } className={ s.navigation_item } >

        <Link className="p" href={ value.href }>{ value.title }</Link>

      </li>

    )

  }

  return (
    <>

      <header className={ `${ s.header } ${ s.header_small } ` }>

        { menuIsOpen && <MobileMenu /> }

        <div className={ `${ s.main } container flex items-center` }>

          <button className={ s.mobile_menu_button } onClick={ () => setMenuIsOpen( prev => !prev ) }>
            { menuIsOpen ? <MenuClosedImage /> : <MenuImage /> }
          </button>

          <Link className={ s.logo } href={ '/' }>
            <LogoImage />
          </Link>

          <ul className={ s.navigation }>{ navigationList }</ul>

          <ul className={ `${ s.controls } flex gap-24 gap-l-16` }>

            <ControlWithIcon

              adaptiveText
              Icon={ <CartImage className={ s.icon } /> }
              text="Корзина"

            />


            <Animate

              containerClassName = { s.favorite  }
              className={ ` ${ s.icon }` }
              onClick={() => router.push('/favorites')}
              wrapperClass={ `${ s.control_with_icon } flex items-center` }
              frames={ [

                <HeartImage className={ s.icon } key={ 1 } />,
                <HeartImageFrame2 className={ s.icon } key={ 2 } />,

              ] }

            >

              <ControlWithIcon

                className={ `${ s.mobile_hide } ${ s.laptop_hide }` }
                adaptiveText
                
                text="Избранное"
              />

            </Animate>

            { !data
              ? <Animate

                onClick = { () => setSignInPopupIsActive( true ) }
                className={ s.icon }
                wrapperClass={ `${ s.control_with_icon } flex items-center` }
                frames={ [

                  <LoginImage className={ s.icon } key={ 1 } />,
                  <LoginImageFrame2 className={ s.icon } key={ 2 } />,

                ] }

              >

                <ControlWithIcon
                  onClick={ () => setSignInPopupIsActive( true ) }
                  adaptiveTextMobile
                  text="Войти"
                />

              </Animate>
              : <ControlWithIcon
                onClick={ () => router.push('/profile') }
                adaptiveTextMobile
                text="Профиль"
                Icon={ <AvatarImage className = { s.icon }/> }
              /> }

          </ul>

        </div>

        <SignInForm refetchUser = { () => refetchUser() } setSignInPopupIsActive={ setSignInPopupIsActive } signInPopupIsActive={ signInPopupIsActive } />

      </header>

    </>

  );

}

interface IControlsWithIcon {

  Icon?: ReactElement,
  text: string,
  count?: string | number,
  onClick?: ( value: any ) => void,
  adaptiveText?: boolean
  adaptiveTextMobile?: boolean
  className?: string

}


const ControlWithIcon: FC<IControlsWithIcon> = ( props ) => {

  const { count, Icon, text, adaptiveText, onClick, adaptiveTextMobile, className } = props

  return (

    <button

      onClick={ onClick }
      className={ `${ s.control_with_icon } ${ cssIf( className, className! ) } ${ cssIf( adaptiveText, s.adaptive_text ) } flex items-center` }

    >

      { Icon }

      <P className={ `${ s.control_text } ${ cssIf( adaptiveTextMobile, s.mobile_hide ) }` } >{ text }</P>

    </button>

  )

}

const MobileMenu = () => {

  return (
    <div className={ s.mobile_menu }>

      <div className={ `${ s.mobile_menu_content } container` }>

        <a href="/catalog" className="h2">Каталог</a>
        <TextCategories listType className={ s.categories } />

        <a href="/delivery.and.pay" className="h2">Доставка и оплата</a>
        <a href="/about.us" className="h2">О нас</a>
        <a href="/contacts" className="h2">Контакты</a>

        <div className={ s.controls }>

          <a className={ `h2` } href='/'>
            <CartImage />
            Корзина
          </a>
          <a className={ `h2` } href='/'>
            <HeartImage />
            Избранное
          </a>
          <a className={ `h2` } href='/'>
            <LoginImage />
            Войти
          </a>

        </div>

        <div className={ s.contacts }>

          <a href="tel:+79189999999">+7 (918) 999-99-99</a>
          <a className="pt-m-8" href="mailto:honeymom@gmail.com">honeymom@gmail.com</a>
          <P className="pt-m-8">с 10:00 до 21:00</P>

        </div>

      </div>

    </div>
  )

}

interface SignInFormProps {

  signInPopupIsActive: boolean
  setSignInPopupIsActive: ( vale: boolean ) => void
  refetchUser: () => void

}

type Inputs = {

  phone: string
  code1: number,
  code2: number,
  code3: number,
  code4: number,


}

const SignInForm: FC<SignInFormProps> = ( { signInPopupIsActive, setSignInPopupIsActive, refetchUser } ) => {

  const [ time, setTime ] = useState( 60 )

  const {

    register,
    handleSubmit,
    watch,
    getValues,
    setError,
    clearErrors,
    setFocus,
    getFieldState,
    formState: { errors },

  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = ( data ) => {
    sendPhoneMutation.mutate( {
      phone: data.phone.replaceAll( ' ', '' ).replaceAll( '+', '' ).replaceAll('-', '').replace(')', '').replace('(', '')
    } )
  }

  const sendCodeMutation = useMutation( {

    mutationFn: () => {

      clearErrors( 'root' )

      return UserApi.authConfirm( {
        phone: getValues().phone.replaceAll( ' ', '' ).replaceAll( '+', '' ).replaceAll('-', '').replace(')', '').replace('(', ''),
        code:
          getValues().code1
          + getValues().code2
          + getValues().code3
          + getValues().code4
      } )
    },

    onError: ( err: AxiosError<any> ) => {

      setError( 'root', {
        message: err.response?.data.code?.[ 0 ]
      } )

    },

    onSuccess: () => {

      refetchUser()
      setSignInPopupIsActive( false )

    }

  } )

  const sendPhoneMutation = useMutation( {

    mutationFn: ( data: { phone: string } ) => UserApi.sendAuthRequest( data ),
    onSuccess: () => {

      setStep( 1 )
      setTime( 60 )

      const timeInterval = setInterval( () => {

        setTime( prev => {

          if ( prev - 1 <= 0 ) clearInterval( timeInterval )
          return prev - 1

        } )

      }, 1000 )

    },

    onError: ( err: AxiosError<any> ) => {

      setError( 'phone', {
        message: err.response?.data?.phone[ 0 ]
      } )

    }

  } )


  const values = [ watch('code1'), watch('code2'), watch('code3'), watch('code4') ]

  useEffect(() => {

    const index = values.findIndex( str => {
      if ( !str ) return true
    })

    const name = `code${index + 1}` as "code1" | "code2" | "code3" | "code4"
    setFocus(name)
    

  }, values )


  const steps = [
    <>

      <Input

        key={ 0 }
        error={ errors.phone?.message }
        label="Ваш телефон*"
        mask = {  /\b(?:\+?7|8)[ -]?\(?\d{3}\)?[ -]?\d{3}[ -]?\d{2}[ -]?\d{2}\b'/ }

        inputParams={ {
          type: 'tel',
          placeholder: "+7 999 999 99 99",

          ...register( 'phone', {

            minLength: {

              value: 2,
              message: 'Введен слишком короткий номер телефона'

            },
            

          } ),


   
        } }

      />

      <Button onClick={ handleSubmit( onSubmit ) } className={ s.sign_in_button } >Получить код</Button>
      <P className={ s.sign_in_privacy_policy }>

        Нажимая на кнопку, вы соглашаетесь на
        { " " }
        <a className="p" href="/">
          обработку персональных данных в
          соответствии с политикой конфиденциальности
        </a>

      </P>
    </>,

    <>

      <P className={ s.sign_in_code_label }>

        Код отправлен на номер
        { " " }
        { getValues().phone?.[ 0 ] === '7' ? '+' : '' }
        { getValues().phone }

      </P>

      <div className={ s.sign_in_code } key={ 1 }>

        <Input errorStyle = { !!errors.root?.message } inputParams={ { className: s.input_code , placeholder: '', max: 9, maxLength: 1, min: 0, type: 'text', ...register( 'code1', { max: 9 } ) } } />
        <Input errorStyle = { !!errors.root?.message } inputParams={ { className: s.input_code , placeholder: '', max: 9, maxLength: 1, min: 0, type: 'text', ...register( 'code2', { max: 9 } ) } } />
        <Input errorStyle = { !!errors.root?.message } inputParams={ { className: s.input_code , placeholder: '', max: 9, maxLength: 1, min: 0, type: 'text', ...register( 'code3', { max: 9 } ) } } />
        <Input errorStyle = { !!errors.root?.message } inputParams={ { className: s.input_code , placeholder: '', max: 9, maxLength: 1, min: 0, type: 'text', ...register( 'code4', { max: 9 } ) } } />

      </div>

      { errors.root?.message && <P className={ s.sign_in_code_err }>{ errors.root.message }</P> }
      <Button onClick={ () => sendCodeMutation.mutate() } className={ s.sign_in_code_send_button }>Отправить</Button>
      { time <= 0
        ? <Button onClick={ handleSubmit( onSubmit ) } >Отправить еще раз</Button>
        : <P className={ s.code_time }>Получить новый можно через { time >= 60 ? time : '00:' + time }</P> }

    </>

  ]

  const [ step, setStep ] = useState( 0 )

  return (

    <Popup

      isActive={ signInPopupIsActive }
      title="Вход или регистрация"
      setIsActive={ setSignInPopupIsActive }
      className={ `${ s.sign_in_popup } ${ s[ `step_${ step }` ] }` }

    >

      <div className={ s.sign_in_form }>

        { steps[ step ] }

      </div>

    </Popup>
  );

}

