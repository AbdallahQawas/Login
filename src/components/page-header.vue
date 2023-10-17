<template>
  <div class="flex justify-between items-baseline text-blue-500 text-lg font-bold">
    <div class="m-3">{{ pageTitle ? pageTitle : 'Dashboard' }}</div>
    <div class="flex m-3 space-x-1">
      <span class="py-1"><iconifyProfile class="h-5 w-5"></iconifyProfile> </span>
      <div>{{ tenantName }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import iconifyProfile from '../icons/iconify-profile.vue'
type propsType = {
  tenantName: string
  pageTitle: string
}

const props = defineProps<propsType>()
</script>
