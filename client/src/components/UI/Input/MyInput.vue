<template>
  <div class="myInput">
    <img alt="">
    <input type="text" class="input" :value="modelValue" @input="emits('update:modelValue', ($event.target as HTMLInputElement).value)">
  </div>
</template>

<script setup lang="ts">

  const props = defineProps({
    modelValue: String
  })


  const emits = defineEmits([
      'update:modelValue'
  ])

</script>

<style scoped>

</style>