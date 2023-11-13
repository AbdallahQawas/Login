<template>
  <div class="font-semibold bg-gray-200 p-1 rounded-md">
    <button @click="loadNext">Load next</button>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'onLoadNextChanged'): void
}>()

function loadNext() {
  emit('onLoadNextChanged')
}
</script>
