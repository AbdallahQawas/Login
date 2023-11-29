<template>
  <page-template>
    <template #content>
      <div class="ml-2">
        <card-grids></card-grids>
      </div>
      <div class="m-4">
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
      </div>
      <div class="m-4">
        <component-wrapper title="Map" :expand="true">
          <template #slot1>
            <div></div>
          </template>
          <template #slot2>
            <map-viewer v-if="!!layers.length" :layers="layers"></map-viewer>
          </template>
        </component-wrapper>
      </div>
      <div class="m-4">
        <chart-tab
          v-if="displaySwitch"
          @on-tab-opened="() => (displaySwitch = !displaySwitch)"
        ></chart-tab>
        <chart-grid
          v-if="!displaySwitch"
          @on-grid-opened="() => (displaySwitch = !displaySwitch)"
        ></chart-grid>
      </div>
      <div class="m-4">
        <component-wrapper title="Envelop Chart">
          <template #slot1>
            <div></div>
          </template>
          <template #slot2>
            <envelop-chart></envelop-chart>
          </template>
        </component-wrapper>
      </div>
      <div class="m-4">
        <component-wrapper title="Stacked Chart">
          <template #slot1>
            <div></div>
          </template>
          <template #slot2>
            <stacked-bar></stacked-bar>
          </template>
        </component-wrapper>
      </div>
    </template>
  </page-template>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import pageTemplate from "./page-template.vue";
import { type dataType } from "./table-view/table-view.types";
import dataTable from "@/components/data-table/data-table.vue";
import mapViewer from "@/components/map-viewer/map-viewer.vue";
import { useDataTableStore } from "@/services/data-table-service/data-table.service";
import componentWrapper from "./component-wrapper.vue";
import type { ChartConfiguration } from "chart.js/auto";
import MapService from "@/services/map-service/map-service";
import type { IMapLayer } from "@/services/map-service/map-types";
import cardGrids from "./card-grids/card-grids.vue";
import chartTab from "./chart-tab/chart-tab.vue";
import chartGrid from "./chart-grid/chart-grid.vue";
import { DataTableClass } from "@/api/DataTableAPI/DataTableAPI.models";
import envelopChart from "./envelop-chart/envelop-chart.vue";
import stackedBar from "./stacked-bar/stacked-bar.vue";

const dataTableStore = useDataTableStore();
const mapService = MapService();

let labels = ref<string[]>([]);
let data = ref<dataType[][]>([]);
let dataForChart = ref<Object>({});
let config = ref<ChartConfiguration>({} as ChartConfiguration);

let displaySwitch = ref(true);

let layers = ref<IMapLayer[]>([]);
let dataClass = ref<DataTableClass>(new DataTableClass());

async function init() {
  await dataTableStore.loadDataTable();

  labels.value = ["Time", "Label", "Value"];
  data.value = dataTableStore.getDataTable().data;

  dataForChart.value = dataTableStore.getDataTable().getDataForChart();

  dataClass.value = dataTableStore.getDataTable();

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
