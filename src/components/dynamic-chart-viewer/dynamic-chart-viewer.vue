<template>
  <chart-viewer
    v-if="config?.data?.datasets?.[0]?.data?.length"
    :chart-config="config"
  ></chart-viewer>
</template>

<script lang="ts" setup>
import chartViewer from "../chart-viewer/chart-viewer.vue";
import { onMounted, ref, watch } from "vue";
import { ChartService } from "@/services/chart-details-service/chart-details.service";
import type { ChartConfiguration } from "chart.js/auto";
import { useDataTableStore } from "@/services/data-table-service/data-table.service";
import { DynamicFilterService } from "@/services/dynamic-filter-service/dynamic-filter.service";

const dynamicFilterService = DynamicFilterService();

const dataTableStore = useDataTableStore();

const chartService = ChartService();
let config = ref<ChartConfiguration>({} as ChartConfiguration);

watch(
  () => [dynamicFilterService.label, dynamicFilterService.disableFilter],
  () => init,
);

async function init() {
  await chartService.loadChartDetails();

  await dataTableStore.loadDataTable();

  let dataForChart = dataTableStore.getDataTable().getDataForChart();

  if (dynamicFilterService.label && dynamicFilterService.disableFilter) {
    let temp = dataForChart.data.filter(
      (item) => item.x === dynamicFilterService.label,
    );
    dataForChart.data = temp;
  }
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
