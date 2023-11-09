<template>
  <button @click="sorting">
    <icon-wrapper icon-code="basil:sort-solid"></icon-wrapper>
  </button>
</template>

<script setup lang="ts">
import iconWrapper from '@/components/icon-wrapper/icon-wrapper.vue'
import { EdataType, type dataType } from './table-view.types'

type propsType = {
  colIndex: number
  data: dataType[][]
}
const props = defineProps<propsType>()

const emit = defineEmits<{
  (e: 'onDataSorted', items: dataType[][]): void
}>()

let sortedData: dataType[][] = props.data
let sortType = 'Asc'

function sorting() {
  if (sortType === 'Asc') {
    sortedData = sortedData.sort((a, b) => {
      if (a[props.colIndex].type === EdataType.Number) {
        return parseFloat(a[props.colIndex].value) < parseFloat(b[props.colIndex].value) ? -1 : 1
      }
      return a[props.colIndex].value < b[props.colIndex].value ? -1 : 1
    })
    sortType = 'Des'
  } else {
    sortedData = sortedData.sort((a, b) => {
      if (a[props.colIndex].type === EdataType.Number) {
        return parseFloat(a[props.colIndex].value) > parseFloat(b[props.colIndex].value) ? -1 : 1
      }
      return a[props.colIndex].value > b[props.colIndex].value ? -1 : 1
    })
    sortType = 'Asc'
  }
  console.log('test')
  emit('onDataSorted', sortedData)
}
</script>
