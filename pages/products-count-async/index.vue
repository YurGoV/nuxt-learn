<script setup lang="ts">
// @ts-ignore
// const { data: productCount, pending } = await useAsyncData('products', () =>
//   $fetch('api/products-count-async')
// )
// TODO: fix - not work properly on page reload
// @ts-ignore
const { data: productCount, pending } = await useLazyAsyncData('products', () =>
  $fetch('api/products-count-async')
)

const refresh = () => refreshNuxtData('products')
</script>

<template>
  <div>
    <p>{{ pending ? "Loading" : productCount }}</p>
    <button @click="refresh">
      Refresh
    </button>
  </div>
</template>
