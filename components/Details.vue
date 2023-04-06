<template>
  <h3>Details</h3>
  <h2>
    {{ item.title }}
  </h2>
  <p>
    {{ item.body }}
  </p>
</template>

<script setup>
const props = defineProps({ item: Object });
</script>
