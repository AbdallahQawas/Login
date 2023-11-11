<template>
  <div class="m-4">
    <div class="bg-gray-100 p-4 font-bold text-blue-600">
      {{ title }}
    </div>
    <div>
      <slot> </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
type propsType = {
  title: string
}

const props = defineProps<propsType>()
</script>
