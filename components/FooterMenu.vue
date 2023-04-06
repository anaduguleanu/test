<template>
  <!--    <div>-->
  <!--        <NuxtLink to="/test">-->
  <!--            test-->
  <!--        </NuxtLink>-->
  <!--        <NuxtLink to="/">-->
  <!--            homepage-->
  <!--        </NuxtLink>-->
  <!--    </div>-->

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="item in items">
            <NuxtLink :to="item.url" active-class="active" class="nav-link">
              {{ item.text }}
            </NuxtLink>
            <!--                        git remote add origin git@github.com:anaduguleanu/test.git-->
            <!--                        git branch -M main-->
            <!--                        git push -u origin main-->
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useMenuItems } from "~/composables/useMenuItems";

const items = useMenuItems();
</script>

<style>
a {
  color: red;
}
a:hover {
  color: blue;
}
.router-link-active {
  color: green;
}
</style>
