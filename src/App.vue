<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex justify-center space-x-10">
    <RouterLink class="bg-blue-500 text-white p-2" to="/login">login</RouterLink>
    <RouterLink class="bg-blue-500 text-white p-2" to="/menu">menu</RouterLink>
  </div>
  <router-view />
</template>

<style></style>
