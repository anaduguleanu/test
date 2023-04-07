<template>
  <h3>Details</h3>
  <h2>
    {{ item.title }}
  </h2>
  <p>
    {{ author.name }}
  </p>
  <p>
    {{ item.userId }}
  </p>
  <p>
    {{ item.body }}
  </p>
</template>

<script setup>
import { useNews } from "~/composables/useNews";

const props = defineProps({ item: Object });
const author = ref({});
const useAuthor = async (userId) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const author = await result.json();
  return author;
};
// watchEffect(() => {
//   console.log("fetching author", props.item.userId);
//   useAuthor(props.item.userId).then((_author) => {
//     author.value = _author;
//   });
// });
watch(
  () => {
    console.log("checking", props.item.userId);
    return props.item.userId;
  },
  () => {
    console.log("refreshing author", props.item.userId);
    useAuthor(props.item.userId).then((_author) => {
      author.value = _author;
    });
  },
  {
    immediate: true,
  }
);
</script>
