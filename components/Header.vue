<template>
  <!-- <header> -->
  <div class="Header">
    <ul>
      <li>
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="events">
          Events
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="custom">
          Custom
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="state">
          State
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="products-count-async">
          ProductsCountAsync
        </NuxtLink>
      </li>
    </ul>
  </div>
  <!-- </header> -->
</template>

<style scoped>
ul {
  display: flex;
}
li {
  margin-left: 8px;
}
</style>
