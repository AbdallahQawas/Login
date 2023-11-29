<template>
  <base-modal
    v-if="isOpenExpandModal"
    @on-display-modal="() => (isOpenExpandModal = !isOpenExpandModal)"
  >
    <div class="flex flex-col p-2 w-full text-blue-500">
      <div class="shadow-md p-2 rounded-md text-left">
        <div class="flex flex-col">
          <div class="flex justify-between">
            <div class="font-semibold">{{ cardObject[1]?.value }}</div>
          </div>
          <div>( {{ cardObject[0]?.value }} )</div>
        </div>
        <div class="mt-10">{{ cardObject[2]?.value }}</div>
      </div>
    </div>
  </base-modal>

  <base-modal
    v-if="isOpenExpandChart"
    @on-display-modal="() => (isOpenExpandChart = !isOpenExpandChart)"
  >
    <chart-viewer :chart-config="config"></chart-viewer>
  </base-modal>
  <div class="flex flex-col p-2 w-full">
    <div class="shadow-md p-2 rounded-md bg-white text-blue-500">
      <div class="flex flex-col">
        <div class="flex justify-between">
          <div class="font-semibold">{{ cardObject[1]?.value }}</div>
          <div class="flex">
            <button @click="isOpenExpandChart = !isOpenExpandChart">
              <icon-wrapper
                class="w-5 h-5 text-gray-400 hover:text-blue-500"
                icon-code="solar:chart-bold"
              ></icon-wrapper>
            </button>
            <button @click="isOpenExpandModal = !isOpenExpandModal">
              <icon-wrapper
                class="w-5 h-5 text-gray-400 hover:text-blue-500"
                icon-code="iconoir:expand"
              ></icon-wrapper>
            </button>
          </div>
        </div>
        <div>( {{ cardObject[0]?.value }} )</div>
      </div>
      <div class="mt-10">{{ cardObject[2]?.value }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type dataType } from "@/components/table-view/table-view.types";
import { onMounted, ref } from "vue";
import iconWrapper from "../icon-wrapper/icon-wrapper.vue";
import baseModal from "../base-modal/base-modal.vue";
import type { DataTableClass } from "@/api/DataTableAPI/DataTableAPI.models";
import chartViewer from "../chart-viewer/chart-viewer.vue";
import type { ChartConfiguration } from "chart.js/auto";

type propsType = {
  data: DataTableClass;
};

const props = defineProps<propsType>();

let cardObject = ref<dataType[]>([]);
let isOpenExpandModal = ref(false);
let isOpenExpandChart = ref(false);
let dataForChart = ref<Object>({});
let config = ref<ChartConfiguration>({} as ChartConfiguration);

function init() {
  cardObject.value = props.data.data[props.data.data.length - 1];
  dataForChart.value = props.data.getDataForChart();

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
}

onMounted(init);
</script>
