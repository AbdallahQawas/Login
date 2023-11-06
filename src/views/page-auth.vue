<template>
  <div class="flex flex-col items-center">
    <div class="text-red-600">You have no Authorization for this page</div>
    <button class="bg-blue-500 text-white p-2" @click="homePage()">Go to Home Page</button>
  </div>
</template>

<script lang="ts" setup>
import pageTemplate from '../components/page-template.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function homePage() {
  router.push('/')
}
</script>
