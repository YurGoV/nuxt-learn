// https://nuxt.com/docs/guide/going-further/hooks#app-hooks-runtime
// TODO: when & how it work?
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    console.log('page START hook')
    /* your code goes here */
  })
})
