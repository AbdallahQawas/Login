<template>
  <div class="flex w-full py-1 text-blue-400">
    <button :disabled="currentPage === 1" class="px-10" @click="prev">
      <icon-wrapper icon-code="iconamoon:arrow-left-2"></icon-wrapper>
    </button>
    <div class="flex mx-2">
      <div>{{ currentPage }}</div>
      <div class="mx-2">of</div>
      <div>{{ allPages }}</div>
    </div>
    <button :disabled="currentPage === allPages" class="px-10" @click="next">
      <icon-wrapper icon-code="iconamoon:arrow-right-2"></icon-wrapper>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import iconWrapper from '../icon-wrapper/icon-wrapper.vue'

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
  () => [props.itemsCounter, props.pagesNumber],
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
