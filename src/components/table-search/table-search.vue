<template>
  <input
    v-model="search"
    class="border focus:outline-none bg-gray-100 rounded-md px-3 py-1"
    placeholder="Type to search"
    type="text"
  />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const emit = defineEmits<{
  (e: 'onSearchChanged', search: string): void
}>()

let search = ref('')

watch(
  () => search.value,
  () => {
    emit('onSearchChanged', search.value)
  }
)
</script>
