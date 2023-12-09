<template>
  <dynamic-filters></dynamic-filters>

  <dynamic-card-viewer></dynamic-card-viewer>
  <dynamic-chart-viewer> </dynamic-chart-viewer>
</template>

<script lang="ts" setup>
import dynamicFilters from "@/components/dynamic-filters/dynamic-filters.vue";
import dynamicChartViewer from "../dynamic-chart-viewer/dynamic-chart-viewer.vue";
import dynamicCardViewer from "../dynamic-card-viewer/dynamic-card-viewer.vue";
</script>
