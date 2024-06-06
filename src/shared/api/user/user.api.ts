import { headers } from 'next/headers'
import cookies from '../cookies/cookies'
import apiInstance from '../instance/instance'
import { IAddAddressReq, IGetAddressesRes, User } from './types'

export const UserApi = {

  async sendAuthRequest( data: { phone: string } ) {

    const res = await apiInstance.post<void>( 'rest/accounts/users/auth_request/', data )

    return res.data

  },

  async authConfirm( data: { phone: string, code: number } ) {

    const res = await apiInstance.post<{ token?: string, code?: string[] }>( 'rest/accounts/users/auth_confirm/', data )

    if ( !res.data.token ) return res.data

    cookies.set( 'token', res.data.token )
    return res.data

  },

  async getActiveUser(): Promise<User> {

    const res = await apiInstance.get<User>( 'rest/accounts/users/me/', {
      headers: {
        Authorization: `Bearer ${ cookies.get( 'token' ) }`
      }
    } )

    return res.data

  },

  async updateUserData( data: { username: string, last_name: string, first_name: string, email: string } ): Promise<User> {

    const res = await apiInstance.patch<User>( 'rest/accounts/users/edit/', data, {
      headers: {
        Authorization: `Bearer ${ cookies.get( 'token' ) }`
      }
    } )

    return res.data

  },

  async getAddressesList( { limit, offset }: { limit: number, offset?: number } ): Promise<IGetAddressesRes> {

    const res = await apiInstance.get<IGetAddressesRes>( 'rest/client_addresses/', {
      params: {
        limit,
        offset,
      },
      headers: {
        Authorization: `Bearer ${ cookies.get( 'token' ) }`
      }
    }, )

    return res.data

  },

  async addAddress( data: IAddAddressReq ): Promise<IGetAddressesRes> {

    const res = await apiInstance.post<IGetAddressesRes>( 'rest/client_addresses/', data,
      {
        headers: {
          Authorization: `Bearer ${ cookies.get( 'token' ) }`
        }
      }
    )

    return res.data

  },

  async updateAddress( id: number, data: IAddAddressReq ): Promise<IGetAddressesRes> {

    const res = await apiInstance.put<IGetAddressesRes>( `rest/client_addresses/${id}/`, data,
      {
        headers: {
          Authorization: `Bearer ${ cookies.get( 'token' ) }`
        }
      }
    )

    return res.data

  },

  async deleteAddress( id: number ): Promise<void> {

    const res = await apiInstance.delete<void>( `rest/client_addresses/${id}/`, 
      {
        headers: {
          Authorization: `Bearer ${ cookies.get( 'token' ) }`
        }
      }
    )

    return res.data

  },

  async selectActiveAddress( id: number ): Promise<void> {

    const res = await apiInstance.post<void>( `rest/client_addresses/${id}/select`, 
      {
        headers: {
          Authorization: `Bearer ${ cookies.get( 'token' ) }`
        }
      }
    )

    return res.data

  },

}