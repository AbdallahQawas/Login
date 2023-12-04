<template>
  <div class="flex flex-wrap">
    <div v-for="(card, index) in cardDetails" :key="index">
      <component
        v-if="!!cardDetails?.length"
        :data="dataClass"
        :args="card?.args"
        :is="isComponents(card.code)"
      >
      </component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import flCard from "@/components/fl-card/fl-card.vue";
import { DataTableClass } from "@/api/DataTableAPI/DataTableAPI.models";
import { ref, onMounted, type Component } from "vue";
import { CardService } from "@/services/card-details-service/card-details.service";
import { CardDetailsClass } from "@/api/PageSettingsAPI/PageSettingsAPI.models";
import dynamicCard from "@/components/dynamic-card/dynamic-card.vue";
import { useDataTableStore } from "@/services/data-table-service/data-table.service";

const dataTableStore = useDataTableStore();

const cardService = CardService();

let dataClass = ref<DataTableClass>(new DataTableClass());
let cardDetails = ref<CardDetailsClass[]>([]);

function isComponents(name: string) {
  let temp: { [key: string]: Component } = {
    flCard,
    dynamicCard,
  };

  return temp[name];
}

async function init() {
  await dataTableStore.loadDataTable();

  dataClass.value = dataTableStore.getDataTable();
  await cardService.loadCardDetails();

  cardDetails.value = cardService.cardDetails;
}

onMounted(init);
</script>
