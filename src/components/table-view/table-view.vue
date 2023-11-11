<template>
  <div>
    <div class="text-blue-500 rounded-md border border-blue-500 max-h-96 overflow-auto">
      <div class="w-full">
        <table class="w-full">
          <thead class="sticky top-0 bg-white">
            <tr>
              <th></th>
              <th class="p-2" v-for="(label, index) in labels" :key="index">
                <div class="flex">
                  <div class="mr-2" v-if="!showHide[index]">
                    {{ label }}
                  </div>
                  <table-sort
                    v-if="!!data.length"
                    :data="data"
                    :col-index="index"
                    @on-data-sorted="dataSorted"
                  ></table-sort>
                  <button class="py-1.5 px-1" @click="toggleCol(index)">
                    <iconify-eye> </iconify-eye>
                  </button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, rowIndex) in data"
              :key="rowIndex"
              :class="rowIndex % 2 === 0 ? 'bg-gray-300' : 'bg-white'"
            >
              <td class="flex px-2">
                <button
                  @click="checkBoxClicked(rowIndex)"
                  class="bg-gray-200 hover:bg-blue-400 w-4 h-4 rounded-md my-3"
                ></button>
              </td>

              <td
                @click="cellPosition(rowIndex, colIndex)"
                v-for="(cell, colIndex) in row"
                :key="colIndex"
                class="whitespace-nowrap p-2"
              >
                <div v-if="!showHide[colIndex]">
                  <data-view :data="cell"></data-view>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import iconifyEye from '../../icons/iconify-eye.vue'
import dataView from '../data-view.vue'
import type { dataType } from './table-view.types'

import tableSort from '@/components/table-view/table-sort.vue'

type propsType = {
  data: dataType[][]
  labels: string[]
  stickyCol?: boolean
}
const props = defineProps<propsType>()

const emit = defineEmits<{
  (e: 'onDataChanged', items: dataType[][]): void
}>()

type showHideType = { [key: number]: boolean }
let showHide = ref<showHideType>([])

function toggleCol(index: number) {
  showHide.value[index] = !showHide.value[index]
}

function checkBoxClicked(index: number) {
  alert(`row index is ${index}`)
}

function cellPosition(row: number, col: number) {
  alert(`cell position is (${row},${col})`)
}

function dataSorted(sortedData: dataType[][]) {
  emit('onDataChanged', sortedData)
}
</script>
