<template>
  <button
    @click="displaySub = !displaySub"
    class="rounded-md px-4 py-2 w-full flex place-items-center hover:bg-white hover:text-blue-500 text-white font-semibold text-start"
  >
    <component class="w-4 h-4" :is="isComponent(page.icon || '')"></component>
    <span>
      {{ page.label }}
    </span>
    <hero-chevron-right></hero-chevron-right>
  </button>
  <div v-if="displaySub" class="flex flex-col px-5 py-2 text-white">
    <hr />
    <div v-for="(sub, index) in page.subPage" :key="index">
      {{ sub.label }}
    </div>
    <hr />
  </div>
</template>

<script setup lang="ts">
import { type pageType } from "./page-menu.vue";
import HeroChevronRight from "../icons/hero-chevron-right.vue";
import iconifyWater from "@/icons/iconify-water.vue";
import iconifyZones from "@/icons/iconify-zones.vue";
import iconifyMonitoring from "@/icons/iconify-monitoring.vue";
import iconifyReports from "@/icons/iconify-reports.vue";
import iconifyDevices from "@/icons/iconify-devices.vue";
import iconifyEpanetDemo from "@/icons/iconify-epanet-demo.vue";
import iconifyControlCenter from "@/icons/iconify-control-center.vue";
import { ref } from "vue";

function isComponent(name: string) {
  let temp = {
    iconifyWater,
    iconifyControlCenter,
    iconifyZones,
    iconifyMonitoring,
    iconifyReports,
    iconifyDevices,
    iconifyEpanetDemo,
  };
  return temp[name];
}

type propsType = {
  page: pageType;
};
const props = defineProps<propsType>();

let displaySub = ref(false);
</script>
