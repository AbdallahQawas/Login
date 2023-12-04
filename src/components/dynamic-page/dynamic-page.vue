<template>
  <!-- <component-wrapper>
    <table-view></table-view>
  </component-wrapper> -->
  <dynamic-card-viewer></dynamic-card-viewer>
  <dynamic-chart-viewer> </dynamic-chart-viewer>
</template>

<script lang="ts" setup>
import chartViewer from "../chart-viewer/chart-viewer.vue";
import tableView from "@/components/table-view/table-view.vue";
import componentWrapper from "@/components/component-wrapper/component-wrapper.vue";
import dynamicChartViewer from "../dynamic-chart-viewer/dynamic-chart-viewer.vue";
import dynamicCardViewer from "../dynamic-card-viewer/dynamic-card-viewer.vue";
</script>
