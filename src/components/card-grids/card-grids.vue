<template>
  <div class="flex flex-wrap">
    <div v-for="(item, index) in componentArr" :key="index">
      <component
        v-if="!!dataClass?.data?.length"
        :data="dataClass"
        :is="isComponents(item)"
      >
      </component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import flCard from "@/components/fl-card/fl-card.vue";
import { DataTableClass } from "@/api/DataTableAPI/DataTableAPI.models";
import { ref, onMounted } from "vue";
import { useDataTableStore } from "@/services/data-table-service/data-table.service";

const dataTableStore = useDataTableStore();

let componentArr = ref(["flCard", "flCard"]);
let dataClass = ref<DataTableClass>(new DataTableClass());

function isComponents(name: string) {
  let temp = {
    flCard,
  };

  return temp[name];
}

async function init() {
  await dataTableStore.loadDataTable();

  dataClass.value = dataTableStore.getDataTable();
}

onMounted(init);
</script>
