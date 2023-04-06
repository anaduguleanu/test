<template>
  <div class="list-group">
    <template v-for="item in news">
      <a
        href="#"
        class="list-group-item list-group-item-action"
        @click="onClick(item)"
        :class="{ active: selectedItem && item.title == selectedItem.title }"
      >
        {{ item.title }}
      </a>
    </template>
  </div>
</template>

<script setup>
import { useNews } from "~/composables/useNews";
const emit = defineEmits(["select"]);
const news = useNews();
const onClick = (item) => {
  emit("select", item);
};
const props = defineProps({ selectedItem: Object });
</script>
