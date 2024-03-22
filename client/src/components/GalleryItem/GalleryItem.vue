<template>
  <div class="gallery__item">
    {{painting}}
  </div>
</template>

<script setup lang="ts">
import type {Painting} from "@/types/Painting";
import type {PropType} from "vue";

const props = defineProps({
  painting: {
    type: Object as PropType<Painting>,
    required: true
  }
})
</script>

<style scoped lang="scss">
.gallery__item {
  flex: 0 1 calc(33.333% - 32px);
  min-height: 260px;
  border: 1px solid white;
}
</style>