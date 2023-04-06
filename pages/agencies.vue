<template>
  <div>
    <h1>Agencies</h1>
    <Search />
    <div class="row">
      <div class="col">
        <List @select="onSelect" :selectedItem="selectedItem" />
      </div>
      <div class="col-8">
        <Details :item="selectedItem" v-if="selectedItem" />
      </div>
    </div>
  </div>
</template>
<script setup>
const selectedItem = ref(null);
const onSelect = (item) => {
  selectedItem.value = item;
};
</script>
