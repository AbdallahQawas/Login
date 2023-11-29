<template>
  <div>
    <chart-viewer
      v-if="!!config?.data?.datasets?.length"
      :chart-config="config"
    ></chart-viewer>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import chartViewer from "@/components/chart-viewer/chart-viewer.vue";
import type { ChartConfiguration } from "chart.js/auto";

let config = ref<ChartConfiguration>({} as ChartConfiguration);

function init() {
  const data = {
    labels: ["Sat", "Sun", "Mon", "Tues", "Thursday"],
    datasets: [
      {
        label: "measured_hydraulic_grade_line",
        data: [1, 3, 5, 7, 9],
      },
      {
        label: "upper_design_grade_line",
        data: [2, 4, 6, 8, 10],
      },
      {
        label: "lower_design_grade_line",
        data: [1, 3, 5, 7, 9],
      },
    ],
  };
  config.value = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          stacked: true,
        },
        x: {
          stacked: true,
        },
      },
    },
  };
}

onMounted(init);
</script>
