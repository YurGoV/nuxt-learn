// NOTE: http://localhost:3000/api/hello-post
export default defineEventHandler((event) => {
  // console.log(event, 'event')
  return {
    hello: 'post route world from roots'
  }
})
