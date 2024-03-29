// NOTE: opened by http://localhost:3000/api/hello
export default defineEventHandler((event) => {
  // console.log(event, 'event')
  return {
    hello: 'world'
  }
})
