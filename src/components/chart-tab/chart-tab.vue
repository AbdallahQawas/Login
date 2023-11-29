<template>
  <component-wrapper title="Chart">
    <template #slot1>
      <div class="flex">
        <button @click="flag = !flag">
          {{ flag ? "go to chart" : "go to table" }}
        </button>
        <button
          class="ml-2"
          :class="{
            'text-blue-500': disableTab,
            'hover:text-blue-500 text-gray-400': !disableTab,
          }"
          @click="displayTab"
        >
          <icon-wrapper class="w-7 h-7" icon-code="fluent:tabs-20-regular">
          </icon-wrapper>
        </button>
      </div>
    </template>
    <template #slot2>
      <div>
        <div class="mx-auto">
          <chart-viewer
            class="w-full h-full"
            v-if="!!config?.data?.datasets?.length && !flag"
            :chart-config="config"
          ></chart-viewer>
          <data-table
            v-if="!!data.length && flag"
            :data="data"
            :labels="labels"
            @on-next-data-load="loadNextData"
          ></data-table>
        </div>
      </div>
    </template>
  </component-wrapper>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { type dataType } from "@/components/table-view/table-view.types";
import dataTable from "@/components/data-table/data-table.vue";
import { useDataTableStore } from "@/services/data-table-service/data-table.service";
import componentWrapper from "@/components/component-wrapper.vue";
import type { ChartConfiguration } from "chart.js/auto";
import chartViewer from "../chart-viewer/chart-viewer.vue";
import iconWrapper from "../icon-wrapper/icon-wrapper.vue";

const dataTableStore = useDataTableStore();

let config = ref<ChartConfiguration>({} as ChartConfiguration);
let flag = ref<boolean>(false);
let data = ref<dataType[][]>([]);
let labels = ref<string[]>([]);
let disableTab = ref<boolean>(false);

const emit = defineEmits<{
  (e: "onTabOpened"): void;
}>();

function displayTab() {
  disableTab.value = !disableTab.value;
  emit("onTabOpened");
}

async function init() {
  await dataTableStore.loadDataTable();

  labels.value = ["Time", "Label", "Value"];
  data.value = dataTableStore.getDataTable().data;

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

async function loadNextData() {
  await dataTableStore.loadNextData();
  data.value = dataTableStore.getDataTable().data;
}

onMounted(init);
</script>
