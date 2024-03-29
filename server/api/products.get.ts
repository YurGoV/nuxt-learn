// ?sync fetch?
import products from './products.json'
export default defineEventHandler((event) => {
  // console.log(event, 'event')
  // return {
  //   hello: 'world'
  // }
  return products
})
