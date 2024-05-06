import apiInstance from '../instance/instance'
import { IGetListRes } from './types'

export const CategoriesApi = {

  async getList() {

    return apiInstance.get<IGetListRes>( 'rest/categories' )

  }

}