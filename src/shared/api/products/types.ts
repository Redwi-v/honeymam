export interface IGetProductListRes {
  count: number
  next: any
  previous: any
  results: IProduct[]
}

export interface IProduct {
  id: number
  is_favourite: boolean
  category: number
  average_rating: number
  amount_reviews: number
  formats: IFormat[]
  price: number
  is_active: boolean
  position: number
  raw_price?: number | null
  discount?: number | null
  title: string
  amount: string
  amount_measure: string
  description: string
  image: string
  badge: any
  composition: any
}

export interface IFormat {
  id: number
  title: string
  is_removed: boolean
  position: number
  raw_price?: number | null
  price: number | null
  discount?: number | null
  amount: string
  amount_measure: string
  quantity: number
  is_recommended: boolean
  product_title: any
}