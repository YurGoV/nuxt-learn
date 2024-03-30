// ?sync fetch?
import products from './products.json'
export default defineEventHandler(async () => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 300)
  })
})
