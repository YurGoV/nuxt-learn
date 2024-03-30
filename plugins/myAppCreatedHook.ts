export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', () => {
    console.log('app CREATED hook execute')
    /* your code goes here */
  })
})
