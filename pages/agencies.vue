<template>
  <div>
    <h1>Agencies</h1>
    <Search @search="onSearch" />
    <div class="row">
      <div class="col">
        <List
          :searchParameters="searchParameters"
          @select="onSelect"
          :selectedItem="selectedItem"
        />
      </div>
      <div class="col-8">
        <Details :item="selectedItem" v-if="selectedItem" />
      </div>
    </div>
  </div>
</template>
<script setup>
const selectedItem = ref(null);
const searchParameters = ref({});
const onSelect = (item) => {
  selectedItem.value = item;
};
const onSearch = (_searchParameters) => {
  searchParameters.value = _searchParameters;
};
</script>
