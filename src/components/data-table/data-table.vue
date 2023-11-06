<template>
  <div class="flex flex-col bg-white p-4 m-4 rounded-md">
    <div class="flex justify-between">
      <pages-display @on-page-index-changed="pageIndexChange"></pages-display>
      <table-search @on-search-changed="searchChanged"></table-search>
    </div>
    <table-view
      v-if="!!dataToView.length"
      @on-data-changed="dataChanged"
      :labels="labels"
      :data="dataToView"
      :sticky-col="stickyCol"
    ></table-view>
    <table-pagination
      :pages-number="data.length"
      :items-counter="currentIndex"
      @on-page-changed="pageChanged"
    ></table-pagination>
  </div>
</template>

<script lang="ts" setup>
import tableView from '@/components/table-view/table-view.vue'
import tablePagination from '../table-pagination/table-pagination.vue'
import type { dataType } from '../table-view/table-view.types'
import { onMounted, ref } from 'vue'
import pagesDisplay from '@/components/pages-display/pages-display.vue'
import tableSearch from '@/components/table-search/table-search.vue'

const props = defineProps<propsType>()

type propsType = {
  labels: string[]
  data: dataType[][]
  stickyCol?: boolean
}

let dataToView = ref<dataType[][]>([])
let currentPage = ref(1)
let currentIndex = ref(5)

function dataChanged(data: dataType[][]) {
  dataToView.value = data
}

function pageChanged(page: number) {
  currentPage.value = page
  handleData()
}

function pageIndexChange(index: number) {
  currentIndex.value = index
  init()
}

function handleData(search?: string) {
  dataToView.value = []
  for (let i = 0; i < props.data.length; i++) {
    if (i < currentPage.value * currentIndex.value && i < props.data.length) {
      if (search) {
        for (let j = 0; j < props.data[i].length; j++) {
          let temp = props.data[i][j].value.includes(search)
          if (temp) {
            dataToView.value.push(props.data[i])
            break
          }
        }
      } else {
        dataToView.value.push(props.data[i])
      }
    }
  }
}

function searchChanged(search: string) {
  handleData(search)
}

function init() {
  handleData()
}

onMounted(init)
</script>
