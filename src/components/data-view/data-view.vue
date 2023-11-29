<template>
  <div v-if="data.type === EdataType.Date">
    {{ data.value }}
  </div>
  <div v-if="data.type === EdataType.String">
    {{ data.value }}
  </div>
  <div v-if="data.type === EdataType.Number">
    {{ parseInt(data.value) }} m/hr
  </div>
</template>

<script setup lang="ts">
import type { dataType } from "@/components/table-view/table-view.types";
import { EdataType } from "@/components/table-view/table-view.types";

type propsType = {
  data: dataType;
};

const props = defineProps<propsType>();
</script>
