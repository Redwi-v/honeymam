export interface User {

  id: number,
  first_name: string,
  last_name: string,
  username: string,
  email: string,
  phone: string,

}


// addresses
export type IGetAddressesRes = {

  count: number
  next: string
  previous: string

  results: IAddress[]

}

export interface IAddress {
  id: number
  city: string
  address: string
  number: string
  apartment: number
  building: string
  stage: number
  entrance: number
  longitude?: string
  latitude?: string
  is_private_house: boolean
  is_selected: boolean
}

export interface IAddAddressReq {

  city: string
  address: string
  number?: string
  apartment?: number
  building?: string
  stage?: number
  entrance?: number
  longitude?: string
  latitude?: string
  is_private_house?: boolean
  is_selected?: boolean

}