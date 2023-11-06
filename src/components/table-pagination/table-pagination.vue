<template>
  <div class="flex w-max items-center py-1">
    <button
      :disabled="currentPage === 1"
      class="hover:bg-blue-400 hover:text-white p-1"
      @click="prev"
    >
      prev
    </button>
    <div class="flex mx-2">
      <div>{{ currentPage }}</div>
      <div class="mx-2">of</div>
      <div>{{ allPages }}</div>
    </div>
    <button
      :disabled="currentPage === allPages"
      class="hover:bg-blue-400 hover:text-white p-1"
      @click="next"
    >
      next
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { dataType } from '@/components/table-view/table-view.types'
import { onMounted, ref, watch } from 'vue'

type propsType = {
  itemsCounter: number
  pagesNumber: number
}

const props = defineProps<propsType>()

const emit = defineEmits<{
  (e: 'onPageChanged', currentPage: number): void
}>()

let currentPage = ref<number>(1)
let allPages = ref<number>(0)

function prev() {
  currentPage.value--
  emit('onPageChanged', currentPage.value)
}

function next() {
  currentPage.value++
  emit('onPageChanged', currentPage.value)
}

watch(
  () => props.itemsCounter,
  () => {
    init()
    emit('onPageChanged', currentPage.value)
  }
)

function init() {
  allPages.value = Math.ceil(props.pagesNumber / props.itemsCounter)
  currentPage.value = 1
}

onMounted(init)
</script>
