<template>
  <chart-viewer
    v-if="config?.data?.datasets?.[0]?.data?.length"
    :chart-config="config"
  ></chart-viewer>
</template>

<script lang="ts" setup>
import chartViewer from "../chart-viewer/chart-viewer.vue";
import { onMounted, ref } from "vue";
import { ChartService } from "@/services/chart-details-service/chart-details.service";
import type { ChartConfiguration } from "chart.js/auto";
import { useDataTableStore } from "@/services/data-table-service/data-table.service";

const dataTableStore = useDataTableStore();

const chartService = ChartService();
let config = ref<ChartConfiguration>({} as ChartConfiguration);

async function init() {
  await chartService.loadChartDetails();

  await dataTableStore.loadDataTable();

  let dataForChart = dataTableStore.getDataTable().getDataForChart();

  config.value = {
    type: chartService.chartDetails[0].chart_type,
    data: {
      datasets: [dataForChart],
    },
    options: {
      scales: {
        x: {
          type: "time",
          time: {
            unit: "hour",
            displayFormats: {
              hour: "hh:mm a",
            },
          },
        },
      },
    },
  };
}

onMounted(init);
</script>
