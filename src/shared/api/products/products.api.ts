import apiInstance from '../instance/instance'
import {  IGetProductListRes, IProduct, IProductRatingsRes } from './types'

export const ProductsApi = {

  async getList( params: { badge?: string, categories?: string } ) {

    return apiInstance.get<IGetProductListRes>( 'rest/products', {
      params
    } )

  },

  async getProductById( { id } : { id: number} ) {

    return apiInstance.get<IProduct>( `rest/products/${ id }`)

  },

  async getProductRating( { id } : { id: number} ) {

    return apiInstance.get<IProductRatingsRes>( `rest/products/${ id }/ratings`)

  }

}