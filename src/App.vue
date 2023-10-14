<script setup lang="ts">
import { RouterView } from 'vue-router'
import LoginForm from './components/LoginForm.vue'
// import BlankPAge from './components/BlankPage.vue'
</script>

<template>
  <div class="bg-gray-200 flex justify-center items-center h-screen">
    <LoginForm />
  </div>
  <router-view />
</template>

<style></style>
