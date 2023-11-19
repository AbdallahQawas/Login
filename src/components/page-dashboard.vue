<template>
  <page-template>
    <template #content>
      <component-wrapper title="Table">
        <template #slot1>
          <div></div>
        </template>
        <template #slot2>
          <data-table
            v-if="!!data.length"
            :data="data"
            :labels="labels"
            @on-next-data-load="loadNextData"
          ></data-table>
        </template>
      </component-wrapper>

      <component-wrapper title="Map" :expand="true">
        <template #slot1>
          <div></div>
        </template>
        <template #slot2>
          <map-viewer :layers="layers"></map-viewer>
        </template>
      </component-wrapper>

      <component-wrapper title="Chart">
        <template #slot1>
          <div class="flex">
            <button @click="flag = !flag">
              {{ flag ? "go to chart" : "go to table" }}
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
  </page-template>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import pageTemplate from "./page-template.vue";
import { type dataType } from "./table-view/table-view.types";
import dataTable from "@/components/data-table/data-table.vue";
import mapViewer from "@/components/map-viewer/map-viewer.vue";
import chartViewer from "./chart-viewer/chart-viewer.vue";
import { useDataTableStore } from "@/services/data-table-service/data-table.service";
import componentWrapper from "./component-wrapper.vue";
import type { ChartConfiguration } from "chart.js/auto";
import MapService from "@/services/map-service/map-service";
import type { IMapLayer } from "@/services/map-service/map-types";

const dataTableStore = useDataTableStore();
const mapService = MapService();

let labels = ref<string[]>([]);
let data = ref<dataType[][]>([]);
let dataForChart = ref<Object>({});
let config = ref<ChartConfiguration>({} as ChartConfiguration);
let flag = ref<boolean>(false);
let layers = ref<IMapLayer[]>([]);

async function init() {
  await dataTableStore.loadDataTable();

  labels.value = ["Time", "Label", "Value"];
  data.value = dataTableStore.getDataTable().data;

  dataForChart.value = dataTableStore.getDataTable().getDataForChart();

  config.value = {
    type: "line",
    data: {
      datasets: [dataForChart.value],
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
  layers.value = mapService.getMapLayers();
}

async function loadNextData() {
  await dataTableStore.loadNextData();
  data.value = dataTableStore.getDataTable().data;
}

onMounted(init);
</script>
