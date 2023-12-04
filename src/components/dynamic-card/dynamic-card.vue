<template>
  <div class="flex flex-col">
    <div>Label: {{ args.label }}</div>
    <div>Value: {{ args.value }}</div>
  </div>
</template>

<script setup lang="ts">
import type { CDArgsType } from "@/api/PageSettingsAPI/PageSettingsAPI.types";
import type { DataTableClass } from "@/api/DataTableAPI/DataTableAPI.models";

type propsType = {
  args?: CDArgsType;
  data: DataTableClass;
};

const props = defineProps<propsType>();
</script>
