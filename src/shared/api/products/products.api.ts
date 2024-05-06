import apiInstance from '../instance/instance'
import { IGetProductListRes } from './types'

export const ProductsApi = {

  async getList( { badge, categories }: { badge?: string, categories?: string } ) {

    return apiInstance.get<IGetProductListRes>( 'rest/products', {
      params: {
        badge,
        categories,
      }
    } )

  }

}