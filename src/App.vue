<script setup lang="ts">
import { RouterView } from 'vue-router'
import pageMenu from './components/page-menu.vue'
import pageHeader from './components/page-header.vue'
import { ref } from 'vue'

let pageLabel = ref('')
function pageClicked(label: string) {
  pageLabel.value = label
}
</script>

<template>
  <div class="flex flex-row">
    <div>
      <pageMenu @on-page-clicked="pageClicked"></pageMenu>
    </div>
    <div class="w-full">
      <div>
        <pageHeader :page-title="pageLabel" tenant-name="Abdallah"></pageHeader>
      </div>
      <div class="bg-gray-200 h-full">test2</div>
    </div>
  </div>
  <router-view />
</template>

<style></style>
