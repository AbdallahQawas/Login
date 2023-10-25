<template>
  <div class="flex justify-between items-baseline text-blue-500 text-lg font-bold">
    <div class="m-3">{{ route.path.replace('/', '') }}</div>
    <div class="relative">
      <button @click="toggleDropdown" class="flex m-3 x-1 space-x-1 items-center">
        <span class="py-1"><iconifyProfile class="h-5 w-5"></iconifyProfile> </span>
        <div>{{ tenantName }}</div>
        <heroChevronRight />
      </button>
      <div class="bg-white p-4 absolute top-10 right-6 border rounded-lg shadow-md" v-if="isOpen">
        <button class="w-full" @click="logout">Log out</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import iconifyProfile from '../icons/iconify-profile.vue'
import heroChevronRight from '@/icons/hero-chevron-right.vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'

import { ref } from 'vue'

const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

type propsType = {
  tenantName: string
}
const route = useRoute()
const router = useRouter()

const props = defineProps<propsType>()

function logout() {
  router.push('/login')
  localStorage.clear()
}
</script>
