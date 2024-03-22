<template>
  <div class="wrapper" :data-theme="name">
      <HeaderItem/>
      <GalleryList/>
  </div>
</template>

<script setup lang="ts">
import HeaderItem from './components/HeaderItem.vue'
import themeProvider from "@/helpers/setThemeSettings";
import GalleryList from "@/components/GalleryList/GalleryList.vue";

const { name } = themeProvider()
</script>

<style scoped lang="scss">

.wrapper {
  min-height: 100vh;
  color: var(--primary-text);
  background-color: var(--primary-background);

}
</style>