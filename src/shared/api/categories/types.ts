//res
export interface IGetListRes {

  count: number
  next: any
  previous: any
  results: ICategory[]

}

//params

//common
export interface ICategory {

  id: number
  products: number[]
  products_count: number
  is_removed: boolean
  position: number
  title: string
  image: any
  is_active: boolean
  is_null_category: boolean

}