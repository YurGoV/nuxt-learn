<script setup lang="ts">
// @ts-ignore
const { sayHello } = useUtils();
// @ts-ignore
const { $sayHello } = useNuxtApp();
$sayHello("Yuriy");
console.log("pre-hello string");
sayHello();
</script>
<template>
  <div class="Main">
    <ContentDoc />
    <IconsBicycle />
    <Alert />
    <Profile />
  </div>
</template>
