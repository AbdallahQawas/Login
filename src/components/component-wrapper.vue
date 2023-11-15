<template>
  <div class="m-4">
    <div class="inline-flex w-full justify-between bg-gray-100 p-4">
      <div class="font-bold text-blue-600">
        {{ title }}
      </div>
      <div>
        <slot name="slot1"> </slot>
      </div>
    </div>
    <div>
      <slot name="slot2"> </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
type propsType = {
  title: string
}

const props = defineProps<propsType>()
</script>
