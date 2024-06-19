'use client'
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps"
import s from './map.module.scss'

export const HomeMap = () => {
  return (
    <YMaps >
      <div className={ s.map }>
        <Map width="100%" height="100%" defaultState={ { center: [ 59.996245, 30.217278 ], zoom: 15 } } >
          <Placemark geometry={ [ 59.996245, 30.217278 ] } />
        </Map>
      </div>
    </YMaps>
  )
}