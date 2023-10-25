<template>
  <div class="flex flex-row">
    <div class="h-full">
      <pageMenu></pageMenu>
    </div>
    <div class="w-full">
      <div>
        <pageHeader page-title="" tenant-name="Abdallah"></pageHeader>
      </div>
      <div class="bg-gray-200 h-full">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import pageMenu from './page-menu.vue'
import pageHeader from './page-header.vue'
import PageTest from './page-test.vue'
</script>
