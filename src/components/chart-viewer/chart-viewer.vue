<template>
  <div class="flex justify-center items-center">
    <div class="p-2 w-full h-full" ref="chartContainer"></div>
  </div>
</template>
<script lang="ts" setup>
import Chart, { type ChartConfiguration } from "chart.js/auto";
import { computed, onMounted, ref, watch } from "vue";
import "chartjs-adapter-date-fns";

type propsType = {
  chartConfig: ChartConfiguration;
};

const props = defineProps<propsType>();
const chartContainer = ref(null);
const config = computed<ChartConfiguration>(() => props.chartConfig);

let chart = {} as Chart;

watch(() => props.chartConfig.data.datasets[0].data.length, updateChart);
function updateChart() {
  if (chart) {
    chart.destroy();
  }
  init();
}

function init() {
  if (chartContainer.value) {
    let newCanvas = document.createElement("canvas");
    chartContainer.value.innerHTML = "";
    chartContainer.value.appendChild(newCanvas);
    chart = new Chart(newCanvas, config.value);
  }
}

onMounted(init);
</script>
