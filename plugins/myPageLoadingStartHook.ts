export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:loading:start', () => {
    console.log('page LOADING START hook')
    /* your code goes here */
  })
})
