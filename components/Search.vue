<template>
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input
        @input="onInput"
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</template>

<script setup>
const emit = defineEmits(["search"]);
const onInput = (event) => {
  emit("search", { query: event.currentTarget.value });
};
</script>
