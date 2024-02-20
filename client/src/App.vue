<template>
  <div class="wrapper">
      <HeaderItem/>
  </div>
</template>

<script setup lang="ts">
import HeaderItem from './components/HeaderItem.vue'
import { useStore } from './stores/store';
const store = useStore()

</script>

<style scoped lang="scss">
.wrapper {
  background-color: v-bind('store.themeSettings.settings.background_color');
  min-height: 100vh;
}
</style>