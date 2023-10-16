<template>
  <button
    @click="displaySub = !displaySub"
    class="px-4 py-2 w-full flex space-x-2 hover:bg-white hover:text-blue-500 text-white font-semibold text-start"
  >
    <component class="w-5 h-5" :is="isComponent(page.icon || '')"></component>
    <span>
      {{ page.label }}
    </span>
    <hero-chevron-right></hero-chevron-right>
  </button>
  <div v-if="displaySub" class="flex flex-col">
    <div v-for="(sub, index) in page.subPage" :key="index">
      {{ sub.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { type pageType } from './page-menu.vue'
import HeroChevronRight from '../icons/hero-chevron-right.vue'
import iconifyWater from '@/icons/iconify-water.vue'
import iconifyZones from '@/icons/iconify-zones.vue'
import iconifyMonitoring from '@/icons/iconify-monitoring.vue'
import iconifyReports from '@/icons/iconify-reports.vue'
import iconifyDevices from '@/icons/iconify-devices.vue'
import iconifyEpanetDemo from '@/icons/iconify-epanet-demo.vue'
import iconifyControlCenter from '@/icons/iconify-control-center.vue'
import { ref } from 'vue'

function isComponent(name: string) {
  let temp = {
    iconifyWater,
    iconifyControlCenter,
    iconifyZones,
    iconifyMonitoring,
    iconifyReports,
    iconifyDevices,
    iconifyEpanetDemo
  }
  return temp[name]
}

type propsType = {
  page: pageType
}
const props = defineProps<propsType>()

let displaySub = ref(false)
</script>
