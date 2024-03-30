<script setup lang="ts">
// NOTE: as in video:
//
// @ts-ignore
// useHead({
//   title: 'My Learn Nuxt App',
//   meta: [{ name: 'description', content: 'My test site' }]
// })

// NOTE: also in off-docs:
// https://nuxt.com/docs/getting-started/seo-meta#useseometa
//
// @ts-ignore
useSeoMeta({
  title: 'My Learn Nuxt App',
  ogTitle: 'My Learn Nuxt App',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image'
})
</script>
<template>
  <div>
    <NuxtLayout>
      <Header />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<!-- NOTE: !!! meta is also available nuxt components (wigh dynamic values):  -->
<!-- https://nuxt.com/docs/getting-started/seo-meta#components -->
<!-- https://youtu.be/fTPCKnZZ2dk?si=KNASWp93MWNtmgZJ&t=8192 -->
