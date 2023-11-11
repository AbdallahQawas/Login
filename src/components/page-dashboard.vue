<template>
  <page-template>
    <template #content>
      <component-wrapper title="Table">
        <data-table v-if="!!data.length" :data="data" :labels="labels"></data-table>
      </component-wrapper>
      <component-wrapper title="Map">
        <map-viewer></map-viewer>
      </component-wrapper>
      <component-wrapper title="Chart">
        <chart-viewer></chart-viewer>
      </component-wrapper>
    </template>
  </page-template>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import pageTemplate from './page-template.vue'
import { type dataType } from './table-view/table-view.types'
import dataTable from '@/components/data-table/data-table.vue'
import mapViewer from '@/components/map-viewer/map-viewer.vue'
import chartViewer from './chart-viewer/chart-viewer.vue'
import { useDataTableStore } from '@/services/data-table-service/data-table.service'
import componentWrapper from './component-wrapper.vue'

const dataTableStore = useDataTableStore()

let labels = ref<string[]>([])
let data = ref<dataType[][]>([])

async function init() {
  await dataTableStore.loadDataTable()

  labels.value = ['Time', 'Label', 'Value', 'Time', 'Label', 'Value']
  data.value = dataTableStore.getDataTable()
}

onMounted(init)
</script>
