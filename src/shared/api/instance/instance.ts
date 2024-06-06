import axios from 'axios';

const instance = axios.create( {

  baseURL: 'https://honeymam.store',
  timeout: 50000,
  headers: {
    "Http-App-ID": process.env.Http_App_ID,
  }, 

} );



instance.interceptors.response.use( response => response, error => {

  console.log(error)

  if ( !error.response ) {

    console.error( 'Сервер не отвечает', error.request );

  } else if ( !error.response.data ) {

    console.error( 'Нет данных в ответе', error.response );
    console.error( 'Сервер вернул ошибку:', error.response );

  }

  return Promise.reject( error );

} );

export default instance