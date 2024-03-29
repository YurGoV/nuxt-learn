// NOTE: opened by http://localhost:3000/hello
export default defineEventHandler((event) => {
  // console.log(event, 'event')
  return {
    hello: 'world from roots'
  }
})
