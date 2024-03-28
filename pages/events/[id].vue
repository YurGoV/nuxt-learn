<script setup lang="ts">
import { useRoute } from 'vue-router'
// import { useNuxtApp } from "nuxt";

const route = useRoute()
console.log(route.params.id)

const nuxt = useNuxtApp()
console.log('useNuxtApp', nuxt)
</script>

<template>
  <div>event id page</div>
  <div>event id: {{ $route.params.id }}</div>
</template>
