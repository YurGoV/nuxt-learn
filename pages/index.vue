<script setup lang="ts">
// @ts-ignore
const { sayHello } = useUtils();
console.log('pre-hello string')
sayHello()
</script>
<template>
  <div class="Main">
    <IconsBicycle />
    <Alert />
    <Profile />
  </div>
</template>
