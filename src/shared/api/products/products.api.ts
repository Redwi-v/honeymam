import cookies from '../cookies/cookies'
import apiInstance from '../instance/instance'
import {  IGetProductListRes, IProduct, IProductRatingsRes } from './types'

export const ProductsApi = {

  async getList( params: { badge?: string, categories?: string } ) {

    return apiInstance.get<IGetProductListRes>( 'rest/products', {
      params,
    } )

  },

  async toggleFavorite({ id }: { id:number | string }) {

    return apiInstance.post<IProduct>( `rest/products/${id}/switch_favourite/`, {
    } , {
      headers: {
        Authorization: `Bearer ${ cookies.get( 'token' ) }`
      },
    })

  },

  async getFavorites( params: any) {

    return apiInstance.get<IGetProductListRes>( 'rest/products/favourites/', {
      params,
      headers: {
        Authorization: `Bearer ${ cookies.get( 'token' ) }`
      }
    } )

  },

  async getProductById( { id } : { id: number} ) {

    return apiInstance.get<IProduct>( `rest/products/${ id }`)

  },

  async getProductRating( { id } : { id: number} ) {

    return apiInstance.get<IProductRatingsRes>( `rest/products/${ id }/ratings`)

  }

}