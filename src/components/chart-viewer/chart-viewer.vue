<template>
  <div class="p-2 w-full h-full">
    <div class="w-11/12 h-5/6" id="chartContainer"></div>
  </div>
</template>
<script lang="ts" setup>
import Chart, { type ChartConfiguration } from 'chart.js/auto'
import { onMounted } from 'vue'
import 'chartjs-adapter-date-fns'

type propsType = {
  chartConfig: ChartConfiguration
}

const props = defineProps<propsType>()

function init() {
  const ctx = document.getElementById('chartContainer')
  let newCanves = document.createElement('canvas')
  ctx?.appendChild(newCanves)

  if (ctx) {
    const chart = new Chart(newCanves, props.chartConfig)
  }
}

onMounted(init)
</script>
