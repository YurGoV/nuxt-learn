<script setup lang="ts">
// @ts-ignore
definePageMeta({
  layout: 'custom'
})
</script>
<template>
  <div class="Custom page">
    <p>Custom page</p>
    <!-- NOTE: this is from assets folder, with preprocessing -->
    <img src="~/assets/01.png" alt="postgre schema">
    <!-- <img src="@/assets/01.png" alt="postgre schema" /> -->

    <!-- NOTE: this is from public folder -->
    <img src="/02.png" alt="postgre schema">
  </div>
</template>
