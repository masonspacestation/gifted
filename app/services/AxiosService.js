import { baseURL } from '../env.js';
import { logger } from '../utils/Logger.js';

// @ts-ignore
// eslint-disable-next-line no-undef
export const api = axios.create({
  baseURL: 'https://sandbox.codeworksacademy.com/',
  timeout: 8000,
  withCredentials: true
})

export const giphyApi = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs',
  timeout: 8000,
  params: {
    key: '4T4MxZ6FNxRUkt3T61DeNpUeitUFrOz2',
    rating: 'pg',
    limit: 10,
  }

})

api.interceptors.request.use(config => config, handleAxiosError)
api.interceptors.response.use(response => response, handleAxiosError)

function handleAxiosError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    logger.warn('[📡 AXIOS_ERROR_RESPONSE_DATA]', error.response.data)
  } else if (error.request) {
    // The request was made but no response was received
    logger.warn('[📡 AXIOS_ERROR_NO_RESPONSE]', error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    logger.warn('[📡 AXIOS_ERROR_INVALID_REQUEST]', error.message)
  }
  return Promise.reject(error)
}