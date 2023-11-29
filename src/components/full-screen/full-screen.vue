<template>
  <div
    class="flex flex-col fixed inset-0 z-10 h-screen w-screen bg-white text-blue-500"
  >
    <button @click="closeClicked" class="p-10 flex justify-end">
      <icon-wrapper class="w-7 h-7" icon-code="iconamoon:close"></icon-wrapper>
    </button>
    <div id="fullModalContainer"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import iconWrapper from "../icon-wrapper/icon-wrapper.vue";

const emit = defineEmits<{
  (e: "onCloseClicked"): void;
  (e: "onInitFinished"): void;
}>();

function closeClicked() {
  emit("onCloseClicked");
}

function init() {
  emit("onInitFinished");
}

onMounted(init);
</script>
