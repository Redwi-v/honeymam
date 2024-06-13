'use client'
import { BreadCrumbs, Button, DaDataField, H1, H2, ICrumbItem, Input, Notification, P, Popup, RadioButton } from "@/shared/ui.kit"
import s from './profile.view.module.scss'
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { UserApi } from "@/shared/api/user/user.api"
import { FC, useEffect, useState } from "react"
import { ListImage } from "@/app/_images/list"
import { MapPointImage } from "@/app/_images/map.point"
import { StarImage } from "@/app/_images/star"
import { ClockImage } from "@/app/_images/clock"
import Link from "next/link"
import { ArrowImage } from "@/app/_images/arrow"
import { StarIcon } from "@/app/_images/starIcon"
import { LoginImage } from "@/app/_images/login"
import { CountCircle } from "@/app/_images/count_circle"
import { SubmitHandler, useForm } from "react-hook-form"
import { cssIf } from "@/shared/scripts"
import moment from "moment";
import 'moment/locale/ru'
import { AxiosError } from "axios";
import { ButtonStylesEnum } from "@/shared/ui.kit/button/ui/button";
import { PencilIcon } from "@/app/_images/pencil";
import { DaDataAddress, DaDataSuggestion } from 'react-dadata';
import Image from "next/image";
import { Status1 } from "@/app/_images/status1";
import cookies from "@/shared/api/cookies/cookies";
import { useRouter, useSearchParams } from "next/navigation";
import { IAddress, IUpdateUserInfoReq } from "@/shared/api/user/types";
import { Store } from "react-notifications-component";
moment.locale( 'ru' );

interface ProfilePageProps {

}

const ProfilePage: FC<ProfilePageProps> = props => {

  const breadCrumbsList: ICrumbItem[] = [

    {
      href: '/',
      title: 'Главная',
    },
    {
      href: '/',
      title: 'Профиль',
    },

  ]

  const router = useRouter()
  const params = useSearchParams()
  const activeTab = params.get( 'tab' ) || tabsKeys.userData
  const ActiveComponent = tabs[ activeTab ].component

  const queryClient = useQueryClient()

  const [ exitPopupIsOpen, setExitPopupIsOpen ] = useState( false )

  return (

    <section className={ `${ s.profile_page } container` }>
      <BreadCrumbs list={ breadCrumbsList } />
      <H1 className={ s.title }>Профиль</H1>

      <Popup className={ s.exit_popup } title="Вы точно хотите выйти?" isActive={ exitPopupIsOpen } setIsActive={ setExitPopupIsOpen }>
        <div className={ s.exit_form }>
          <Button onClick={ () => {
            cookies.remove( 'token' )
            router.push( '/' )
            queryClient.clear()
            queryClient.invalidateQueries( [ 'activeUser' ] )
            setExitPopupIsOpen( false )
          } } style={ ButtonStylesEnum.white }>Да</Button>
          <Button onClick={ () => setExitPopupIsOpen( false ) }>Нет</Button>
        </div>
      </Popup>

      <div className={ s.main_content }>

        <nav className={ s.navigation }>

          { Object.keys( tabs ).map( key => {

            const Icon = tabs[ key ].icon

            return (

              <Link className={ `${ s.nav_item } ${ activeTab === key && s.active }` } key={ key } href={ { query: { tab: key } } }>

                <Icon className={ s.icon } />

                <p className={ s.label }>

                  { tabs[ key ].tabName }

                  { key === tabsKeys.reviews && <span className={ s.count }>

                    <CountCircle />

                    <span className={ s.count_value }>3</span>

                  </span> }

                </p>

                { !tabs[ key ].noArrow && <ArrowImage className={ s.arrow } /> }

              </Link>

            )

          } ) }

          <button onClick={ () => setExitPopupIsOpen( true ) } className={ s.nav_item }>

            <LoginImage className={ s.icon } />
            <span>Выйти</span>

          </button>

        </nav>

        <div className={ s.content }>

          { <ActiveComponent /> }

        </div>

      </div>

    </section>
   

  )
}

enum tabsKeys {

  userData = "userData",
  addresses = "addresses",
  history = "history",
  reviews = "reviews",

}

// USER DATA
interface IUserData {


}

type Inputs = {

  name: string,
  lastName: string,
  phone: string,
  email: string,

  year: '2024' | '2022',
  month: string,
  day: string,

}

const UserData: FC<IUserData> = ( { } ) => {

  const years: { value: string }[] = Array.from( Array( 100 ).keys() ).map( index => ( { value: String( moment().year() - index ) } ) )
  const months = Array.from( Array( 12 ).keys() ).map( index => ( { value: moment().month( index ).format( 'MMMM' ), number: moment().month( index ).format('MM') } ) )

  const { data: userData } = useQuery( {

    queryKey: [ 'activeUser' ],
    queryFn: UserApi.getActiveUser,
    initialData: null,

  } )

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    resetField,
    formState: { errors },
  } = useForm<Inputs>()

  const [ year, setYear ] = useState( years[ 0 ] )
  const [ month, setMonth ] = useState( months[ 0 ] )
  const [ days, setDays ] = useState(
    Array.from( Array( moment( { month: months.findIndex( item => item.value === month.value ) } ).daysInMonth() ).keys() )
      .map( index => ( { value: String( index + 1 ).length < 2 ? `0${ String( index + 1 ) }` : String( index + 1 ) } ) )
  )

  const [ day, setDay ] = useState( days[ 0 ] )

  useEffect( () => {

    setDays( Array.from( Array( moment( { month: months.findIndex( item => item.value === month.value ) } ).daysInMonth() ).keys() )
      .map( index => ( { value: String( index + 1 ).length < 2 ? `0${ String( index + 1 ) }` : String( index + 1 ) } ) ) )

  }, [ month ] )

  const updateUserDataMutation = useMutation( {

    mutationFn: ( data: IUpdateUserInfoReq ) => UserApi.updateUserData( data ),
    onError: ( err: AxiosError<any> ) => {

      setError( 'root', { message: err.response?.data?.detail } )

    },
    onSuccess: () => {

      Store.addNotification({
        type: "success",
        content: <Notification text = { 'Данные изменены' }/>,
        insert: "top",
        container: "bottom-center",
        animationIn: ["animate__animated", "animate__bounceIn" ],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1000,
          onScreen: false
        }
      });

    }

  } )


  const onSubmit: SubmitHandler<Inputs> = ( data ) => updateUserDataMutation.mutate( {

    first_name: data.name,
    last_name: data.lastName,
    username: userData?.username!,
    email: data?.email!,
    date_of_birth: `${year.value}-${month.number}-${day.value}`,
    gender: gender ?  'FEMALE': 'MALE',

  } )


  const [ gender, setGender ] = useState( false )

  
  useEffect( () => {

    setValue( 'name', userData?.first_name || '' )
    setValue( 'lastName', userData?.last_name || '' )
    setValue( 'phone', userData?.phone || '' )
    setValue( 'email', userData?.email || '' )
    
    if ( userData?.gender ) setGender( userData?.gender === 'FEMALE' )
    if ( userData?.date_of_birth ) {

      const [ year, month, day ] = userData?.date_of_birth.split('-')
      const mothValue = moment().month(+month - 1).format('MMMM');
      console.log(month);
      
  
      setYear({
        value: year
      })

      setMonth({
        number: month,
        value: mothValue,
      })

      setDay({
        value: day,
      })

    }
  
  }, [ userData ] )

  return (

    <div className={ s.user_data }>

      <Input clearAction={ () => setValue( 'name', '' ) } className={ `${ s.first_input } ${ s.input }` } inputParams={ { placeholder: '', ...register( 'name', { minLength: { value: 3, message: 'Минимальная длина 3' } } ) } } label="Имя" />
      <Input clearAction={ () => setValue( 'lastName', '' ) } className={ s.input } inputParams={ { placeholder: '', ...register( 'lastName', { minLength: { value: 3, message: 'Минимальная длина 3' } } ) } } label="Фамилия" />

      <P className={ s.toggle_label }>Пол</P>
      <div onClick={ () => setGender( prev => !prev ) } className={ s.toggle }>

        <span className={ `${ cssIf( !gender, s.active ) }` } >Мужской</span>
        <span className={ `${ cssIf( gender, s.active ) }` } >Женский</span>

      </div>
      <Input inputParams={ {
        placeholder: "+7 999 999 99 99",

        ...register( 'phone', {

          minLength: {

            value: 8,
            message: 'Введен слишком короткий номер телефона'

          },
          pattern: {

            value: /(^8|7|\+7)((\d{10})|(\s\d{3}\s\d{3}\s\d{2}\s\d{2}))/,
            message: "неправильный формат, прмер: +7 999 999 99 99"

          }

        } )

      } } label="Телефон" />
      <Input inputParams={ {
        placeholder: "",

        ...register( 'email', {

          minLength: {

            value: 4,
            message: 'Введен слишком короткий e-mail'

          },

          pattern: {

            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "неправильный формат e-mail"

          }

        } )

      } } label="E-mail" />

      <P className={ s.toggle_label }>Дата рождения</P>

      <div className={ s.birth_date }>
        <DropList className={ s.drop_down } activeValue={ day.value } setActiveItem={ setDay } list={ days } />
        <DropList className={ s.drop_down } activeValue={ month.value } setActiveItem={ setMonth } list={ months } />
        <DropList className={ s.drop_down } activeValue={ year.value } setActiveItem={ setYear } list={ years } />
      </div>
      { errors && <P className={ s.err }>{ errors.root?.message || Object.values( errors ).find( value => value.message )?.message }</P> }

      <Button loading = {updateUserDataMutation.isLoading} className={ s.send_button } onClick={ handleSubmit( onSubmit ) }>Сохранить изменения</Button>
    </div>

  )

}

// ADDRESSES
interface IAddressesData {

}

type AddressesFormInputs = {

  number: string

  entrance: number,
  stage: number,
  apartment: number,

}

const Addresses: FC<IAddressesData> = ( { } ) => {

  const [ isPrivateHouse, setIsPrivateHouse ] = useState( false )

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setError,
    setValue,
    reset,
    resetField,
    formState: { errors },
  } = useForm<AddressesFormInputs>()

  const { data: addressesData, refetch: refetchAddresses } = useQuery( {

    queryKey: 'Addresses',
    queryFn: () => UserApi.getAddressesList( { limit: 20 } ),
    initialData: null,

  } )

  const addAddressMutation = useMutation( {

    mutationFn: () => UserApi.addAddress( {

      address: daDataState[ 0 ]?.value!,
      apartment: getValues( 'apartment' ),
      entrance: getValues( 'entrance' ),
      stage: getValues( 'stage' ),
      number: daDataState[ 0 ]?.data.house!,
      is_private_house: isPrivateHouse,
      city: daDataState[ 0 ]?.data.city!,
      longitude: daDataState[ 0 ]?.data.geo_lon!,
      latitude: daDataState[ 0 ]?.data.geo_lat!,

    } ),

    onError: ( err: AxiosError<any> ) => {

      setError( 'root', {
        message: Object.keys( err.response?.data )[ 0 ] + ' ' + Object.values( err.response?.data )[ 0 ]
      } )

    },

    onSuccess: () => {

      setPopupIsOpen( false )
      refetchAddresses()

    }

  } )

  const deleteAddressMutation = useMutation( {

    mutationFn: ( id: number ) => UserApi.deleteAddress( id ),
    onSuccess: () => {
      refetchAddresses()
      setPopupIsOpen( false )
    }

  } )

  const selectAddressMutation = useMutation( {
    mutationFn: ( { id, selectedAddress }: { id: number, selectedAddress: IAddress } ) => {

      return UserApi.selectActiveAddress( id, selectedAddress )
    },

    onSuccess: () => {
      Store.addNotification({
        type: "success",
        content: <Notification text = { 'Адрес был успешно изменен' }/>,
        insert: "top",
        container: "bottom-center",
        animationIn: ["animate__animated", "animate__bounceIn" ],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1000,
          onScreen: false
        }
      });
    }

  } )

  const updateAddressMutation = useMutation( {

    mutationFn: ( { editAddress, id }: { id: number, editAddress: IAddress } ) => UserApi.updateAddress( id, {

      ...editAddress,
      address: daDataState[ 0 ]?.value || editAddress.address,
      city: daDataState[ 0 ]?.data?.city || editAddress.city,
      apartment: getValues( 'apartment' ) || editAddress.apartment,
      number: getValues( 'number' ) || editAddress.number,
      stage: getValues( 'stage' ) || editAddress.stage,
      entrance: getValues('entrance') || editAddress.entrance,
      is_private_house: isPrivateHouse || editAddress.is_private_house

    } ),

    onSuccess: () => {
      refetchAddresses()
      setPopupIsOpen( false )
      Store.addNotification( {
        content: <Notification text={ 'Адрес был успешно изменен' } />,
        insert: "bottom",
        container: "bottom-center",
        animationIn: [ "animate__animated", "animate__bounceIn" ],
        animationOut: [ "animate__animated", "animate__fadeOut" ],
        dismiss: {
          duration: 1000,
          onScreen: false,
        }
      } )
    }

  } )

  const daDataState = useState<DaDataSuggestion<DaDataAddress>>();

  const onSubmit: SubmitHandler<AddressesFormInputs> = ( data ) => {

    if ( !daDataState[ 0 ]?.data?.city ) return setError( 'root', { message: "Укажите город в адрессе" } )
    if ( !daDataState[ 0 ]?.data?.house ) return setError( 'root', { message: "Укажите номер дома" } )

    addAddressMutation.mutate()

  }

  const [ activeAddress, setActiveAddress ] = useState( 0 )
  const [ popupIsOpen, setPopupIsOpen ] = useState( false )
  const [ editId, setEdit ] = useState<number | null>( null )

  useEffect( () => {

    addressesData?.results.find( ( address, index ) => {

      const isSelected = address.is_selected
      if ( isSelected ) {

        setActiveAddress( address.id )
        return address

      }

    } )

  }, [ addressesData ] );

  const selectActiveAddress = ( id: number ) => {

    const selectedAddress = addressesData?.results.find( address => address.id === id )

    if ( !selectedAddress ) return

    setActiveAddress( id )

    selectAddressMutation.mutate( {
      id,
      selectedAddress: selectedAddress
    } )

  }

  const editAction = ( id: number ) => {

    const selectedAddress = addressesData?.results.find( address => address.id === id )

    if ( !selectedAddress ) return

    setEdit( id )
    setPopupIsOpen( true )

    //@ts-expect-error
    daDataState[ 1 ]( {
      value: selectedAddress.address
    } )
    setValue( 'apartment', selectedAddress.apartment )
    setValue( 'stage', selectedAddress.stage )
    setValue( 'entrance', selectedAddress.entrance )
    setIsPrivateHouse( selectedAddress.is_private_house )

  }

  useEffect( () => {

    if ( popupIsOpen ) return

    setEdit( null )
    //@ts-expect-error
    daDataState[ 1 ]( {
      value: ''
    } )
    resetField( 'number' )
    resetField( 'entrance' )
    resetField( 'apartment' )
    resetField( 'stage' )
    setIsPrivateHouse( false )

  }, [ popupIsOpen ] )

  const removeAddressAction = () => {

    if ( !editId ) return

    deleteAddressMutation.mutate( editId )

  }

  const updateAction = () => {

    const editAddress = addressesData?.results?.find( address => address.id === editId )

    if ( !editAddress ) return

    updateAddressMutation.mutate( {

      id: editId!,
      editAddress: editAddress

    } )

  }

  const addresses = addressesData?.results?.reverse().toReversed()

  return (

    <div className={ s.addresses }>

      <Popup className={ s.popup } title="Изменить адрес" isActive={ popupIsOpen } setIsActive={ setPopupIsOpen }>

        <div className={ s.form }>

          <DaDataField

            className={ s.input }
            label="Город, Улица, дом"
            inputParams={ {} }
            state={ daDataState }

          />


          <div className={ s.form_numbers }>

            <Input

              error={ errors.entrance?.message }
              className={ s.input }
              label="Подъезд"
              inputParams={ { placeholder: '1', type: 'number', ...register( 'entrance', { required: { value: true, message: 'Поле обязательное' } } ) } }

            />

            <Input
              error={ errors.stage?.message }
              className={ s.input }
              label="Этаж"
              inputParams={ { placeholder: '12', type: 'number', ...register( 'stage', { required: { value: true, message: 'Поле обязательное' } } ) } }
            />

            <Input
              error={ errors.apartment?.message }
              className={ s.input }
              label="Квартира"
              inputParams={ { placeholder: '247', type: 'number', ...register( 'apartment', { required: { value: true, message: 'Поле обязательное' } } ) } } />

          </div>


          <RadioButton

            className={ s.radio_button }
            label="Частный дом"
            isChecked={ isPrivateHouse }
            onClick={ () => { setIsPrivateHouse( prev => !prev ) } }

          />

          { errors.root?.message && <span className={ s.err }>{ errors.root?.message }</span> }

          <div className={ s.form_controls }>

            <Button onClick={ editId ? updateAction : handleSubmit( onSubmit ) }>{ editId ? 'Изменить адрес' : 'Добавить адрес' }</Button>
            { editId && <Button onClick={ removeAddressAction } style={ ButtonStylesEnum.red } > Удалить этот адрес </Button> }

          </div>

        </div>

      </Popup>

      <ul className={ s.list }>

        { addresses && addresses.length > 0 && addresses.map( ( address, index ) => (

          <li className={ s.address_item } key={ address.id }>

            <label className={ s.address_info }>

              <RadioButton className={ s.radio_button } isChecked={ address.id === activeAddress } onChange={ () => selectActiveAddress( address.id ) } />

              <div className={ s.address_main }>

                <P className={ s.address }>{ address.address }</P>
                <div className={ s.address_numbers }>
                  <span>Подезд { address.entrance }</span>,
                  <span>Этаж { address.stage }</span>,
                  <span>Квартира { address.apartment }</span>
                </div>

              </div>

            </label>

            <button onClick={ () => editAction( address.id ) } className={ s.edit_button }>
              <PencilIcon />
            </button>

          </li>

        ) ) }

      </ul>

      <Button onClick={ () => setPopupIsOpen( true ) } className={ s.add_button } style={ ButtonStylesEnum.white }>Добавить новый адрес</Button>

    </div>

  )

}

// HISTORY
interface IHistoryData {

}

const History: FC<IHistoryData> = ( { } ) => {

  return (

    <div className={ s.history }>

      <div className={ s.not_found_banner }>

        <div className={ s.info }>

          <H2> здесь пока пусто... </H2>
          <P className={ s.sub_title }>Совершите первый заказ, и он сразу отобразится в истории</P>
          <Button href="/catalog">В каталог</Button>

        </div>

        <Image className={ s.image } fill alt="guyWithCake" src={ '/images/guyWithCake.png' } />

      </div>

    </div>

  )

}

// REVIEWS
interface IReviewsData {

}

type ReviewInputs = {

  review: string,

}

const Reviews: FC<IReviewsData> = ( { } ) => {

  const [ popupIsOpen, setPopupIsOpen ] = useState( false )
  const [ activeImageIndex, setActiveImageIndex ] = useState( 0 )
  const [ hoverReview, setHoverReview ] = useState( 0 )
  const [ reviewStars, setReviewStars ] = useState( 0 )
  const [ IsAnonym, setIsAnonym ] = useState( false )

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setError,
    formState: { errors },
  } = useForm<ReviewInputs>( {
    defaultValues: {
      review: '',
    }
  } )
  const onSubmit: SubmitHandler<ReviewInputs> = ( data ) => {


  }

  return (

    <div className={ s.reviews }>

      <Popup className={ s.popup } title="Напишите отзыв о покупке" isActive={ popupIsOpen } setIsActive={ setPopupIsOpen }>
        <div className={ s.form }>

          <div className={ s.images }>

            <button onClick={ () => setActiveImageIndex( 0 ) } className={ `${ s.image_wrapper } ${ cssIf( activeImageIndex === 0, s.active ) }` }>

              <Image fill src={ '/images/aboutUs/gallery1.jpg' } alt="preview" />

            </button>

            <button onClick={ () => setActiveImageIndex( 1 ) } className={ `${ s.image_wrapper } ${ cssIf( activeImageIndex === 1, s.active ) }` }>

              <Image fill src={ '/images/aboutUs/gallery1.jpg' } alt="preview" />

            </button>

            <button onClick={ () => setActiveImageIndex( 2 ) } className={ `${ s.image_wrapper } ${ cssIf( activeImageIndex === 2, s.active ) }` }>

              <Image fill src={ '/images/aboutUs/gallery1.jpg' } alt="preview" />

            </button>

          </div>

          <div className={ s.main_info }>
            <span className={ s.name }>Наполеон хрустящий</span>
            <span className={ s.params }>Торты <span /> 900 гр.</span>
          </div>

          <div className={ s.review }>

            <div className={ s.stars_list }>
              { Array.from( Array( 5 ).keys() ).map( index => (

                <button
                  onMouseEnter={ () => setHoverReview( index ) }
                  onMouseLeave={ () => setHoverReview( 0 ) }
                  onClick={ () => setReviewStars( index ) }
                  key={ index }
                  className={ `${ s.star } ${ cssIf( hoverReview >= index, s.hover ) } ${ cssIf( reviewStars >= index, s.active ) }` }>
                  <StarImage />
                </button>

              ) ) }
            </div>

            <span className={ s.line } />

            <span className={ s.review_label }>
              Отлично
            </span>

          </div>

          <div className={ s.text }>
            <span className={ s.label }>Отзыв</span>
            <textarea maxLength={ 500 } { ...register( 'review' ) } placeholder="Поделитесь вашими впечатлениями" />
            <span className={ s.symbols_count }>Осталось { watch( 'review' ) ? 500 - watch( 'review' )?.length : 500 } символов</span>
          </div>

          <div className={ s.author }>

            <div className={ s.left }>
              <span className={ s.author_label }>
                Оставить отзыв как
              </span>
              <span className={ s.author_name }>Иван Пирожков</span>
            </div>
              <span className = { s.line }></span>
            <label className={ s.checkbox }>
              <input checked={ IsAnonym } onClick={ () => setIsAnonym( prev => !prev ) } type="checkbox" />
              <span>Или анонимный отзыв</span>
              <div className={ `${ s.custom } ${ cssIf( IsAnonym, s.active ) }` }>
                <span></span>
              </div>
            </label>

          </div>

          <Button className={ s.send }>Отправить</Button>

          <P className={ s.privacy_policy }>
            Нажимая на кнопку, вы соглашаетесь на { " " } <Link href={ '/' }>
              обработку персональных данных
              в соответствии с политикой конфиденциальности</Link>
          </P>

        </div>
      </Popup>

      <ul className={ s.orders_list }>

        <li className={ s.order_item }>
          <div className={ s.info }>

            <P className={ s.order_number }>Заказ 93456-67830, от 4 марта</P>
            <P className={ s.status }>
              <Status1 />
              <span>Принят</span>
            </P>
            <P className={ s.main }>7 731 ₽ ул <span /> Садовая, 47</P>
            <Button onClick={ () => setPopupIsOpen( true ) } className={ s.button }>
              Оставить отзыв
            </Button>

          </div>
          <div className={ s.images }>

            <div className={ s.image_wrapper }>

              <Image fill src={ '/images/aboutUs/gallery1.jpg' } alt="preview" />

            </div>

            <div className={ s.image_wrapper }>

              <Image fill src={ '/images/aboutUs/gallery1.jpg' } alt="preview" />

            </div>

            <div className={ s.image_wrapper }>

              <Image fill src={ '/images/aboutUs/gallery1.jpg' } alt="preview" />

            </div>

          </div>
        </li>


        <li className={ s.order_item }>
          <div className={ s.info }>

            <P className={ s.order_number }>Заказ 93456-67830, от 4 марта</P>
            <P className={ s.status }>
              <Status1 />
              <span>Принят</span>
            </P>
            <P className={ s.main }>7 731 ₽ ул <span /> Садовая, 47</P>
            <Button onClick={ () => setPopupIsOpen( true ) } className={ s.button }>
              Оставить отзыв
            </Button>

          </div>
          <div className={ s.images }>

            <div className={ s.image_wrapper }>

              <Image fill src={ '/images/aboutUs/gallery1.jpg' } alt="preview" />

            </div>

            <div className={ s.image_wrapper }>

              <Image fill src={ '/images/aboutUs/gallery1.jpg' } alt="preview" />

            </div>

            <div className={ s.image_wrapper }>

              <Image fill src={ '/images/aboutUs/gallery1.jpg' } alt="preview" />

            </div>

          </div>
        </li>


        <li className={ s.order_item }>
          <div className={ s.info }>

            <P className={ s.order_number }>Заказ 93456-67830, от 4 марта</P>
            <P className={ s.status }>
              <Status1 />
              <span>Принят</span>
            </P>
            <P className={ s.main }>7 731 ₽ ул <span /> Садовая, 47</P>
            <Button onClick={ () => setPopupIsOpen( true ) } className={ s.button }>
              Оставить отзыв
            </Button>

          </div>
          <div className={ s.images }>

            <div className={ s.image_wrapper }>

              <Image fill src={ '/images/aboutUs/gallery1.jpg' } alt="preview" />

            </div>

            <div className={ s.image_wrapper }>

              <Image fill src={ '/images/aboutUs/gallery1.jpg' } alt="preview" />

            </div>

            <div className={ s.image_wrapper }>

              <Image fill src={ '/images/aboutUs/gallery1.jpg' } alt="preview" />

            </div>

          </div>
        </li>

      </ul>

    </div>

  )

}


const tabs: { [ key: string ]: { component: FC<any>, tabName: string, icon: FC<any>, noArrow?: boolean, count?: number } } = {

  [ tabsKeys.userData ]: {
    component: UserData,
    icon: ListImage,
    tabName: 'Личные данные',
  },

  [ tabsKeys.addresses ]: {
    component: Addresses,
    icon: MapPointImage,
    tabName: 'Мои адреса',
  },

  [ tabsKeys.history ]: {
    component: History,
    icon: ClockImage,
    tabName: 'История заказов',
    count: 3,
  },

  [ tabsKeys.reviews ]: {
    component: Reviews,
    icon: StarIcon,
    noArrow: true,
    tabName: 'Оставить отзыв',
  },

}

interface IDropListProps {

  list: {
    value: string
  }[],

  activeValue: string,
  setActiveItem: ( item: any ) => void
  className?: string

}

const DropList: FC<IDropListProps> = ( { list, activeValue, setActiveItem, className } ) => {

  const [ isOpen, setIsOpen ] = useState( false )

  return (

    <div className={ `${ s.drop_down } ${ className }` }>

      <button onClick={ () => setIsOpen( prev => !prev ) } className={ `${ s.active } ${ cssIf( isOpen, s.open ) }` }>

        { list.find( item => item.value === activeValue )?.value }
        <ArrowImage />

      </button>

      { isOpen && <ul className={ `${ s.list } ${ cssIf( isOpen, s.open ) }` }>

        { list.map( ( item, index ) => (

          <button onClick={ () => { setActiveItem( item ); setIsOpen( false ) } } key={ index } value={ item.value }>

            { item.value }

          </button>

        ) ) }

      </ul> }

    </div>

  )

}

export default ProfilePage
