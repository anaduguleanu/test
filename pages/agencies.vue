<template>
  <div>
    <h1>Agencies</h1>
    <Search @search="onSearch" />
    <div class="card">
      <Splitter style="height: calc(100vh - 300px)" class="mb-5">
        <SplitterPanel
          class="flex align-items-center justify-content-center"
          :size="25"
          :minSize="10"
        >
          <div style="height: 100%; overflow-y: auto">
            <List
              :searchParameters="searchParameters"
              @select="onSelect"
              :selectedItem="selectedItem"
            />
          </div>
        </SplitterPanel>
        <SplitterPanel
          class="flex align-items-center justify-content-center"
          :size="75"
        >
          <Details :item="selectedItem" v-if="selectedItem" />
        </SplitterPanel>
      </Splitter>
    </div>
  </div>
</template>
<script setup>
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
const selectedItem = ref(null);
const searchParameters = ref({});
const onSelect = (item) => {
  selectedItem.value = item;
};
const onSearch = (_searchParameters) => {
  searchParameters.value = _searchParameters;
};
</script>
