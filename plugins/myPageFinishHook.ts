// https://nuxt.com/docs/guide/going-further/hooks#app-hooks-runtime
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    console.log('page FINISH hook')
    /* your code goes here */
  })
})
