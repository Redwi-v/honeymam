'use client'
import { HeartImage } from "@/app/_images/heart"
import { StickImage } from "@/app/_images/stick"
import { IProduct } from "@/shared/api"
import { Button, H1, H2, P } from "@/shared/ui.kit"
import { Dispatch, FC, PropsWithChildren, SetStateAction, useRef, useState } from "react"

import s from './info.module.scss'
import { BinImage } from "@/app/_images/bin"
import { PlusImage } from "@/app/_images/plus"
import { MinusImage } from "@/app/_images/minus"
import { ArrowImage } from "@/app/_images/arrow"
import { StarImage } from "@/app/_images/star"
import { log } from "console"
import { useKeenSlider } from "keen-slider/react"
import { ProductReview } from "@/shared/api/products/types"
import { AvatarIamge } from "@/app/_images/avatar"

import moment from 'moment'
import 'moment/locale/ru'  // without this line it didn't work
moment.locale( 'ru' )

const comments = [
  {
    "id": 0,
    "product": 1,
    "rating": 2,
    "comment": "Пример комментария",
    "user": {
      "id": 3,
      "first_name": "Имя",
      "last_name": "Фамилия",
      "username": "Пользователь",
      "email": "example@mail.ru",
      "phone": "+79991234567"
    },
    "created_at": "2024-05-17T10:12:34.281Z"
  },
  {
    "id": 4,
    "product": 5,
    "rating": 0,
    "comment": "string",
    "user": {
      "id": 6,
      "first_name": "John",
      "last_name": "Doe",
      "username": "jdoe12345",
      "email": "user@example.com",
      "phone": "+79991234567"
    },
    "created_at": "2024-05-17T10:12:34.281Z"
  }
]
const amountMessages: { [ key: string ]: string } = {

  GRAM: 'гр',
  MILLILITRE: '',
  LITRE: '',
  PIECE: 'кусок',
  KILLOGRAMM: 'кг',

}

export const Info: FC<IProduct & { reviews: ProductReview[] }> = ( props ) => {

  const {
    reviews,
    amount_reviews, average_rating, composition, carbohydrates, fats, proteins,
    calories, price, description, raw_price, category,
    amount, amount_measure, title, ...data
  } = props

  const [ count, setCount ] = useState( 0 )
  const [ inFavorite, setInFavorite ] = useState( false )

  return (

    <div className={ s.info }>

      <H2 className={ s.category } >

        <span>{ category.title }</span>
        <span></span>
        <span>{ amount } { amountMessages[ amount_measure ] }.</span>

      </H2>

      <H1 className={ s.title }>{ title }</H1>

      <div className={ s.buy }>

        <div className={ s.price }>

          <P className={ s.actual }>

            { price } ₽

          </P>

          { s.old && raw_price && <P className={ s.old }>

            { raw_price } ₽
            <StickImage />

          </P> }

        </div>

        <div className={ s.controls }>

          <button onClick={ () => setInFavorite( prev => !prev ) } className={ `${ s.like } ${ inFavorite && s.inFavorite }` }>

            <HeartImage />

          </button>

          { count ? <Counter count={ count } setCount={ setCount } /> : <Button className = {  s.buy_button } onClick={ () => setCount( 1 ) } >Добавить в корзину</Button> }


        </div>

      </div>

      <P className={ s.description }>
        { description }
      </P>

      <DropDown title='Пищевая ценность на 100 грамм' >
        <ul className={ s.nutritional_value }>
          <li className={ s.nutritional_value_item }>
            <P>Ккал:</P>
            <P>{ calories }</P>
          </li>
          <li className={ s.nutritional_value_item }>
            <P>Белки:</P>
            <P>{ proteins }</P>
          </li>
          <li className={ s.nutritional_value_item }>
            <P>Жиры:</P>
            <P>{ fats }</P>
          </li>
          <li className={ s.nutritional_value_item }>
            <P>Углеводы:</P>
            <P>{ carbohydrates }</P>
          </li>
        </ul>
      </DropDown>

      <DropDown title='Состав' >
        <P>{ composition }</P>
      </DropDown>

      { reviews.length > 0 && <Reviews reviewsList={ reviews } ratingValue={ average_rating } reviewsCount={ amount_reviews } /> }

    </div>


  )

}

interface ICounterProps {

  count: number,
  setCount: Dispatch<SetStateAction<number>>

}

const Counter: FC<ICounterProps> = ( { count, setCount } ) => {

  return (

    <div className={ s.counter }>

      <button onClick={ () => setCount( prev => prev - 1 ) }>
        { count > 1 ? <MinusImage /> : <BinImage /> }
      </button>

      <span className="p">{ count }</span>

      <button onClick={ () => setCount( prev => prev + 1 ) }>
        <PlusImage />
      </button>

    </div>

  )

}

interface IDropDownProps {

  title: string

}

const DropDown: FC<IDropDownProps & PropsWithChildren> = ( { title, children } ) => {

  const [ isOpen, setIsOpen ] = useState( false )

  return (

    <div className={ `${ s.drop_down } ${ isOpen && s.active }` }>

      <button onClick={ () => setIsOpen( prev => !prev ) } className={ `${ s.button } p` }>
        { title }
        <ArrowImage />
      </button>

      <div className={ s.drop_info }>{ children }</div>

    </div>

  )

}


interface IReviewsProps {

  ratingValue: number;
  reviewsCount: number;
  reviewsList: ProductReview[]

}

const Reviews: FC<IReviewsProps> = ( { ratingValue, reviewsCount, reviewsList } ) => {


  const rating = ratingValue + 1

  const keys = Array.from( Array( 5 ).keys() );

  const remainsRef = useRef( 0 )

  let remains = rating

  const [ one, two, three, four, five ] = keys.map( ( value, index ) => {

    const resValue = remains - 1

    if ( resValue < 1 ) {
      remainsRef.current = resValue
      return 0
    }

    remains = remains - 1
    return 1

  } )



  const completion = ( value: number ) => {

    if ( !value && !remains ) return 0

    if ( !value && remains ) {

      const remainsValue = remainsRef.current
      remainsRef.current = 0

      return remainsValue * 100 + '%'

    }

    return value * 100 + '%'

  }

  const [ sliderRef, slider ] = useKeenSlider( { loop: true } )



  return (

    <div className={ s.reviews }>

      <div className={ s.top }>

        <div className={ s.rating }>

          <P className={ s.rating_value }>{ ratingValue.toFixed( 1 ) }</P>
          <div className={ s.stars }>

            <div data-completion className={ s.star }>

              <StarImage />

              <div style={ { width: completion( one ) } } className={ s.star_yellow }>

                <StarImage />

              </div>

            </div>

            <div className={ s.star }>

              <StarImage />

              <div style={ { width: completion( two ) } } className={ s.star_yellow }>

                <StarImage />

              </div>

            </div>

            <div className={ s.star }>

              <StarImage />

              <div style={ { width: completion( three ) } } className={ s.star_yellow }>

                <StarImage />

              </div>

            </div>

            <div className={ s.star }>

              <StarImage />

              <div style={ { width: completion( four ) } } className={ s.star_yellow } >

                <StarImage />

              </div>

            </div>

            <div className={ s.star }>

              <StarImage />

              <div style={ { width: completion( five ) } } className={ s.star_yellow } >

                <StarImage />

              </div>

            </div>

          </div>


        </div>

        { reviewsList.length > 1 &&  <Controls next={ () => slider.current?.next()} prev={ () => slider.current?.prev()}/>}


      </div>

      <P className={ s.stats }>
        { reviewsCount } оценок
      </P>

      <div ref={ sliderRef } className={ `${ s.reviews_slider } keen-slider` } >

        { reviewsList.map( review => <Review key={review.id} review={review}/> )


        }

      </div>

    </div>

  )

}

export const Controls: FC<{ next: () => void, prev: () => void }> = ( { next, prev } ) => {

  return (

    <div className={ s.reviews_controls }>
      <button onClick={ () => prev() }>
        <ArrowImage />
      </button>
      <button onClick={ () => next() }>
        <ArrowImage />
      </button>
    </div>

  )


}

const Review:FC<{ review: ProductReview }> = ({ review }) => {

  const [ showAll, setShowAll ] = useState( false )

  let validText: string | string[] = review.comment.split( ' ' )
  if ( !showAll ) validText.length = 50
  console.log( validText );
  validText = validText.join( ' ' )


  return (

    <div className={ `${ s.review_item } keen-slider__slide` }>

      <div className={ s.review_item_user }>

        <div className={ s.review_item_user_avatar }>

          <AvatarIamge />

        </div>

        <div className={ s.review_item_user_info }>

          <div className={ s.review_stars }>

            { Array.from( Array( review.rating ).keys() ).map( (_, index) => (
              <StarImage key={index} className={ s.review_star } />
            ) ) }

          </div>

          <P className={ s.review_info }>
            <span>{ moment( review.created_at ).format( 'll' ) }</span>
            <span></span>
            <span>{ review.user.first_name }</span>
          </P>

        </div>

      </div>

      <P className={ s.comment }>
        { validText }
      </P>

      <button className={ `${ s.review_more } p` } onClick={ () => setShowAll( prev => !prev ) } >Подробнее</button>

    </div>

  )

}