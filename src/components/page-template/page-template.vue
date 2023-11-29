<template>
  <div class="flex flex-row h-screen w-full">
    <div class="h-full" v-if="showMenu">
      <pageMenu @toggle-menu="toggleMenu"></pageMenu>
    </div>
    <div class="flex flex-col w-full h-full">
      <div class="w-full">
        <pageHeader
          @toggle-menu="toggleMenu"
          page-title=""
          tenant-name="abdallah"
        ></pageHeader>
      </div>
      <div class="bg-gray-200 overflow-auto w-full h-full py-0.5">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import pageMenu from "@/components/page-menu/page-menu.vue";
import pageHeader from "@/components/page-header/page-header.vue";
import { ref } from "vue";

let showMenu = ref<boolean>(true);

function toggleMenu() {
  showMenu.value = !showMenu.value;
}
</script>
