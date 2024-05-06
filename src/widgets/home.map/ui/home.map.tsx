'use client'
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps"
import s from './map.module.scss'

export const HomeMap = () => {
  return (
    <YMaps >
      <div className={ s.map }>
        <Map width="100%" height="100%" defaultState={ { center: [ 55.685031, 37.537362 ], zoom: 15 } } >
          <Placemark geometry={ [ 55.685031, 37.537362 ] } />
        </Map>
      </div>
    </YMaps>
  )
}