import request from './request'

const getDogImage = () => request('https://dog.ceo/api/breeds/image/random')

export { getDogImage }
