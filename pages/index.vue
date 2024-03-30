<script setup lang="ts">
// @ts-ignore
const { sayHello } = useUtils()
// @ts-ignore
const { $sayHello } = useNuxtApp()
$sayHello('Yuriy')
console.log('pre-hello string')
sayHello()

// server:
const response = await $fetch('/api/hello')
// console.log(response, 'api response')
console.log(response.value, 'api response')

// useFetch
// const {data,pending,error,refresh} = await useFetch('', {})
// @ts-ignore
const { data: simpleHello } = await useFetch(
  'https://timetracker-api.yurgo.fun/api'
)
// console.log(simpleHello.value, 'data.value from useFetch request')

// @ts-ignore
// const { data } = await useFetch('http://localhost:3000/api/products')
// console.log(data.value, 'products.value')

// @ts-ignore
// const { data: products } = await useFetch('/api/products', {
//   // TODO: transform not work
//
//   transform: products => products.data
// })

// NOTE: must be sync:
//
const { data: products } = await useFetch('/api/products')
// console.log(products.value[0], 'fake api products')

// NOTE: async fetch (play with on/off ssr)
//
// @ts-ignore
const { pending, data: asyncProducts } = await useLazyFetch('/api/products-async')
</script>
<template>
  <div class="Main">
    <!-- NOTE: commented to check meta in nuxt.config.ts -->
    <!-- if uncomment - /content/indes.md header will be applied -->
    <!-- <ContentDoc /> -->
    <IconsBicycle />
    <Alert />
    <Profile />
  </div>
  <p>async: {{ pending ? "Loading" : asyncProducts }}</p>
  <p>
  </br>
  </br>
  </p>
  <p>{{ products }}</p>
</template>
