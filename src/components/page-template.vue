<template>
  <div class="flex flex-row">
    <div class="h-screen">
      <pageMenu></pageMenu>
    </div>
    <div class="w-full h-screen">
      <div>
        <pageHeader page-title="" tenant-name="Abdallah"></pageHeader>
      </div>
      <div class="bg-gray-200 h-full py-0.5">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import pageMenu from './page-menu.vue'
import pageHeader from './page-header.vue'
</script>
