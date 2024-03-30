// ?sync fetch?
let productsCount = 0

export default async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsCount++)
    }, 2000)
  })
  return productsCount
}
