<template>
  <div>
    <button @click="copyLinkClicked">
      <icon-wrapper icon-code="ph:copy"></icon-wrapper>
    </button>
  </div>
</template>

<script lang="ts" setup>
import iconWrapper from "@/components/icon-wrapper/icon-wrapper.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

let copyLink = ref("");

async function copyLinkClicked() {
  copyLink.value = `http://localhost:5173${route.path}`;

  await navigator.clipboard.writeText(copyLink.value);
}
</script>
