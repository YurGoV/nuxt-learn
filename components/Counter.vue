<script setup lang="ts">
// const counter = useState("counter", () => Math.round(Math.random() * 1000));
const counter = useCounter()
</script>
<template>
  <div>
    <h1>State page</h1>
    <div>
      Local state Counter: {{ counter }}
      <p />
      <button @click="counter++">
        +
      </button>
      <p />
      <button @click="counter--">
        -
      </button>
    </div>
  </div>
</template>
