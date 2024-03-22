<template>
  <div class="gallery">
    <div class="container">
      <div class="gallery__list">
        <GalleryItem v-for="painting in store.paintings" :key="painting.id" :painting="painting"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/store";
import GalleryItem from "@/components/GalleryItem/GalleryItem.vue";

const store = useStore()
store.setPaintings()

</script>

<style scoped lang="scss">
.gallery {
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }
}
</style>