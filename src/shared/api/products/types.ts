export interface RootRes {

  count: number
  next: any
  previous: any

}

export interface IGetProductListRes extends RootRes {

  results: IProduct[]

}


export interface IProduct {
  id: number
  is_favourite: boolean
  category: ICategory
  average_rating: number
  amount_reviews: number
  images: IImage[]
  videos: IVideo[]
  formats: IFormat[]
  price: number
  is_active: boolean
  position: number
  raw_price: any
  discount: any
  title: string
  amount: string
  amount_measure: string
  short_description: string
  description: string
  image: string
  badge: string
  composition: string
  calories: number
  proteins: number
  fats: number
  carbohydrates: number
}

export interface ICategory {
  id: number
  is_removed: boolean
  position: number
  title: string
  image: any
  is_active: boolean
  is_null_category: boolean
}

export interface IImage {

  id: number
  image: string
  product: number

}

export interface IVideo {

  id: number
  video: string
  product: number

}

export interface IFormat {

  id: number
  title: string
  is_removed: boolean
  position: number
  raw_price: any
  price: number
  discount: any
  amount: string
  amount_measure: string
  quantity: number
  is_recommended: boolean
  product_title: any

}

export type IProductRatingsRes =  ProductReview[]

export interface ProductReview {
  id: number
  product: IProduct
  rating: number
  comment: string
  user: IUser
  created_at: string
}


export interface IUser {
  id: number
  first_name: string
  last_name: string
  username: string
  email: string
  phone: string
}
