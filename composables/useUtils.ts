// NOTE: good practice to do business logic in composables
export const useUtils = () => {
  const sayHello = () => console.log('Hello')
  return {
    sayHello
  }
}

// TODO: research VueUse library (to shorten dev time)
// https://vueuse.org/
