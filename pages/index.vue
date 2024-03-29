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
console.log(response, 'api response')
</script>
<template>
  <div class="Main">
    <ContentDoc />
    <IconsBicycle />
    <Alert />
    <Profile />
  </div>
</template>
