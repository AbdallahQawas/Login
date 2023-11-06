<template>
  <div class="flex flex-row h-screen">
    <div class="h-full">
      <pageMenu></pageMenu>
    </div>
    <div class="flex flex-col w-full h-full">
      <div>
        <pageHeader page-title="" tenant-name="abdallah"></pageHeader>
      </div>
      <div class="bg-gray-200 overflow-auto h-full py-0.5">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import pageMenu from './page-menu.vue'
import pageHeader from './page-header.vue'
</script>
