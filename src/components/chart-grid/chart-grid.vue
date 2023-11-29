<template>
  <component-wrapper title="Chart">
    <template #slot1>
      <div class="flex">
        <button
          class="ml-2"
          :class="{
            'text-blue-500': disableGrid,
            'hover:text-blue-500 text-gray-400': !disableGrid,
          }"
          @click="displayGrid"
        >
          <icon-wrapper class="w-7 h-7" icon-code="fluent:tabs-20-regular">
          </icon-wrapper>
        </button>
      </div>
    </template>
    <template #slot2>
      <div class="flex flex-col text-blue-500">
        <div>Line Chart</div>
        <div class="mx-auto border-2 border-blue-500">
          <chart-viewer
            class="w-full h-full"
            v-if="!!config?.data?.datasets?.length"
            :chart-config="config"
          ></chart-viewer>
        </div>
      </div>
    </template>
  </component-wrapper>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useDataTableStore } from "@/services/data-table-service/data-table.service";
import componentWrapper from "@/components/component-wrapper.vue";
import type { ChartConfiguration } from "chart.js/auto";
import chartViewer from "../chart-viewer/chart-viewer.vue";
import iconWrapper from "../icon-wrapper/icon-wrapper.vue";

const dataTableStore = useDataTableStore();

let config = ref<ChartConfiguration>({} as ChartConfiguration);
let disableGrid = ref<boolean>(false);

const emit = defineEmits<{
  (e: "onGridOpened"): void;
}>();

function displayGrid() {
  disableGrid.value = !disableGrid.value;
  emit("onGridOpened");
}

async function init() {
  await dataTableStore.loadDataTable();

  let dataForChart: Object = dataTableStore.getDataTable().getDataForChart();

  config.value = {
    type: "line",
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
