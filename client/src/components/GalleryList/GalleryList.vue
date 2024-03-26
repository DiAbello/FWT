<template>
  <div class="gallery">
    <div class="container">
      <div class="gallery__list">
        <GalleryItem v-for="painting in store.getSearchedAndFilteredPaintings" :key="painting.id" :painting="painting"/>
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
  padding: 20px 0;
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    @media (max-width: 768px) {
      gap: 24px;
    }
    @media (max-width: 320px) {
      gap: 20px;
    }
  }
}
</style>